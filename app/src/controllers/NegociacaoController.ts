import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoesView.js";
import { MensagemView } from "../views/mensagemView.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/domInjector.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacaoView = new NegociacaoView("#negociacoesView", true);
  private mensagemView = new MensagemView("#mensagemView");
  constructor() {
    this.negociacaoView.update(this.negociacoes);
  }

  @logarTempoDeExecucao()
  @inspect
  adiciona(): void {
    // teste
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.isDiaUtil(negociacao.data)) {
      this.mensagemView.update("apenas negociações em dias uteis são aceitas");
      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limparFormulario();

    setTimeout(() => {
      this.mensagemView.removerMensagem();
    }, 2000);
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

  private isDiaUtil(data: Date): boolean {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  atualizaView(): void {
    this.negociacaoView.update(this.negociacoes);
    this.mensagemView.update("negociação adicionada");
  }
}
