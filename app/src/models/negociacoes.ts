import { Comparavel } from "../utils/comparavel";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  adiciona(item: Negociacao) {
    this.negociacoes.unshift(item);
  }

  //remove(item: Negociacao) {}

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  ehIgual(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this.negociacoes) == JSON.stringify(negociacoes.lista())
    );
  }
}
