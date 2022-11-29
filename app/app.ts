import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacaoView } from "./views/negociacoesView.js";

const controller = new NegociacaoController();

const form = document.querySelector(".form");

if (form)
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
