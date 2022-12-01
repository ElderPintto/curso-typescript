import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoesView.js";
import { MensagemView } from "./../views/mensagemView.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacaoView = new NegociacaoView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacaoView.update(this.negociacoes);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacaoView.update(this.negociacoes);
    this.mensagemView.update("negociação adicionada");
    this.limparFormulario();
    setTimeout(() => {
      this.mensagemView.removerMensagem();
    }, 2000);
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
