const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em Titanic (1997), qual é o nome do diamante azul que Caledon Hockley compra para Rose?",
        alternativas: [
            {
                texto: "Coração do Oceano",
                afirmacao: "está indo bem, acerto a questão mais dificil do questionario"
            },
            {
                texto: "Estrela do Mar",
                afirmacao: "essa esta errada, pois estrela do mar é um animal marinho"
            }
        ]
    },
    {
        enunciado:"Em qual filme podemos ouvir a frase,Eu sou seu pai?",
        alternativas: [
            {
                texto: " Star Wars: O Império Contra-Ataca.",
                afirmacao: "está indo bem,será que conhece mesmo."
            },
            {
                texto: "Rei Leão",
                afirmacao: "confundi a frase, mas vou melhorar"
            }
        ]
    },
   {
   
        enunciado: "Qual é o nome do navio de Jack Sparrow em Piratas do Caribe?",
        alternativas: [
            {
                texto: "Pérola Negra",
                afirmacao: "quem não conhece esse classico, é claro que acertei."
            },
            {
                texto: "O Holandês Voador.",
                afirmacao: " o Holandês voador é uma lenda maritma,achei que tinha algo haver com Piratas do Caribe "
            }
        ]
    },
    {
        enunciado: " Qual filme apresenta um DeLorean que viaja no tempo? ",
        alternativas: [
            {
                texto: " O Exterminador do Futuro.",
                afirmacao: "é um filme muito bom mas me confundi por conta de envolver o titulo futuro."
            },
            {
                texto: " De Volta para o Futuro.",
                afirmacao: "é esse que obvio,sei bastante sobre filmes."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
