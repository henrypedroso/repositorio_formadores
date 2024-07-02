const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".textoResultado");

const perguntas = [
    {
        enunciado: "Pergunta1",
        alternativas: ["Alternativa1", "Alternativa2"]
    },
    {
        enunciado: "Pergunta2",
        alternativas: ["Alternativa1", "Alternativa2"]
    },
    {
        enunciado: "Pergunta3",
        alternativas: ["Alternativa1", "Alternativa2"]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();