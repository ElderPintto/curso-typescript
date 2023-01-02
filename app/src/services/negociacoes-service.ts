import { Negociacao } from "./../models/negociacao";
import { NegociacoesDoDia } from "../interface/NegociacoesDoDia.js";

export class NegociacoesService {
  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("https://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map((dadoDeHoje) => {
          return new Negociacao(
            new Date(),
            dadoDeHoje.vezes,
            dadoDeHoje.montante
          );
        });
      });
  }
}
