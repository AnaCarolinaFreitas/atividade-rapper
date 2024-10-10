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

  // Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const { nome, idade, descricaoFisica, atividadesSuspeitas } = req.body;

    console.log(Number.isInteger(idade));
  
    // Validação dos campos obrigatórios
    if (!nome || !idade || !atividadesSuspeitas) {
      return res.status(400).json({
        message: "Os campos nome, idade e atividadesSuspeitas são obrigatórios!",
      });
    }
  
    // Validação de atividadesSuspeitas
    if (atividadesSuspeitas != "sim" && atividadesSuspeitas != "não") {
      return res.status(400).send({
        message: "Digite 'sim' ou 'não'!",
      });
    }
    const novoSuspeito = {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome,
        idade,
        descricaoFisica,
        atividadesSuspeitas
      };
    
      suspeitos.push(novoSuspeito);
    
      return res.status(201).send({message: "Novo suspeito cadastrado", novoSuspeito});
});

// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const celebridade = suspeitos.find((sus) => sus.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!celebridade) {
      return res.status(404).send({ message: `suspeito com id ${id} não encontrado!` });
    }
  
    return res.status(200).json(celebridade);
  });
  


  export default suspeitosRoutes;
