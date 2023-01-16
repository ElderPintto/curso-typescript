import { Comparavel } from "./../utils/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  paraTexto(): string {
    return `
        data: ${this._data},
        Quantidade: ${this.quantidade},
        valor: ${this.valor}
      `;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ) {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  public ehIgual=(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear() 
    );
  }
}
