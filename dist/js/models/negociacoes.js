export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(item) {
        this.negociacoes.unshift(item);
    }
    //remove(item: Negociacao) {}
    lista() {
        return this.negociacoes;
    }
}
