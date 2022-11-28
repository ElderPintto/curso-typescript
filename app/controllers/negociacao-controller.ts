import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement | null;
  private inputQuantidade: HTMLInputElement | null;
  private inputValor: HTMLInputElement | null;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    console.log(
      "adiciona",
      this.inputData?.value,
      this.inputQuantidade?.value,
      this.inputValor?.value
    );
    const negociacao = this.criaNegociacao();
    this.limparFormulario();
    // negociacao.data.setDate(12);
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista());
  }

  criaNegociacao(): Negociacao | any {
    const exp = /-/g;

    if (
      this.inputData != null &&
      this.inputQuantidade != null &&
      this.inputValor != null
    ) {
      const date = new Date(this.inputData.value.replace(exp, ","));
      const quantidade = parseInt(this.inputQuantidade.value);
      const valor = parseFloat(this.inputValor.value);
      return new Negociacao(date, quantidade, valor);
    }
    return new Error();
  }

  limparFormulario(): void {
    if (
      this.inputData != null &&
      this.inputQuantidade != null &&
      this.inputValor != null
    ) {
      this.inputData.value = "";
      this.inputQuantidade.value = "";
      this.inputData.focus();
      this.inputValor.value = "";
    }
  }
}
