import { NegociacaoController } from "./controllers/NegociacaoController.js";

const controller = new NegociacaoController();

const form = document.querySelector(".form");

if (form)
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });

const btnImporta = document.querySelector(".btn-importa");

if (btnImporta)
  btnImporta.addEventListener("click", (event) => {
    controller.importadaDados();
  });
