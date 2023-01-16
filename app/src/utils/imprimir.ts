import { Imprimivel } from "./imprimivel.js";

export function imprimir(...args: Imprimivel[]) {
  for (const arg of args) {
    console.log(arg.paraTexto());
  }
}
