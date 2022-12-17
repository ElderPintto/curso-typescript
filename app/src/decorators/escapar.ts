export function escapar(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let retorno = metodoOriginal.apply(this, args);
    debugger;
    if (typeof retorno === "string") {
      debugger;
      console.log(`@escape em ação na classe 
                ${this.constructor.name} para o método ${propertyKey} `);
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return retorno;
  };

  return descriptor;
}
