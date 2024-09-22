const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = [
    {
        enunciado: ["Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    {
        enunciado: ["Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
            "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
        ]
    },
    {
        enunciado: ["Pergunta 1",
            alternativas: "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: ["Pergunta 1",
            alternativas: "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: ["Pergunta 1",
            alternativas: "Alternativa 1",
            "Alternativa 2"
        ]
    }

];