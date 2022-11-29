import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacaoView("#negociacoesView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacaoView.update(this.negociacoes);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        if (this.inputData != null &&
            this.inputQuantidade != null &&
            this.inputValor != null) {
            const date = new Date(this.inputData.value.replace(exp, ","));
            const quantidade = parseInt(this.inputQuantidade.value);
            const valor = parseFloat(this.inputValor.value);
            return new Negociacao(date, quantidade, valor);
        }
        return new Error();
    }
    limparFormulario() {
        if (this.inputData != null &&
            this.inputQuantidade != null &&
            this.inputValor != null) {
            this.inputData.value = "";
            this.inputQuantidade.value = "";
            this.inputData.focus();
            this.inputValor.value = "";
        }
    }
}
