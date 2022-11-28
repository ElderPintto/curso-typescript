import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        var _a, _b, _c;
        console.log("adiciona", (_a = this.inputData) === null || _a === void 0 ? void 0 : _a.value, (_b = this.inputQuantidade) === null || _b === void 0 ? void 0 : _b.value, (_c = this.inputValor) === null || _c === void 0 ? void 0 : _c.value);
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
        // negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
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
