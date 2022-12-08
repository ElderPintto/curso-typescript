export abstract class View<T> {
  // protected filhas em acesso mas n pode manipular
  protected elemento: HTMLElement;
  private escapar: boolean;

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor) as HTMLElement;
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }
}
