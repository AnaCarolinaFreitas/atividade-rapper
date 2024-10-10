import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Beyonce",
        idade: 43,
        descricaoFisica: ["estatura media", "cabelos compridos"],
        atividadesSuspeitas: true, //se está envolvido com atividades suspeitas
    },

    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Michael Jackson",
        idade: 66,
        descricaoFisica: ["morto", "vivo"],
        atividadesSuspeitas: false, //se está envolvido com atividades suspeitas
    },

    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Justin Bieber",
        idade: 30,
        descricaoFisica: ["estaura média", "cara de coitado", "cabelo de playboy"],
        atividadesSuspeitas: false, //se está envolvido com atividades suspeitas
    },
    ];

  // Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });

  

  export default suspeitosRoutes;
