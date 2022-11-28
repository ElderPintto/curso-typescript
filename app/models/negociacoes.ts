import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(item: Negociacao) {
    this.negociacoes.unshift(item);
  }

  //remove(item: Negociacao) {}

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
