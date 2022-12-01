export abstract class View<T> {
  // protected filhas em acesso mas n pode manipular
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor) as HTMLElement;
  }

  abstract template(model: T): string;

  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }
}
