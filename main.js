const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como as profissões do futuro podem promover a inclusão digital enquanto contribuem para soluções em face do aquecimento global?",

        alternativas: [
            {
                texto: "Com a evolução das profissões e a  inclusão digital ao desenvolver tecnologias acessíveis para comunidades remotas pode reduzir a dependência de combustíveis fósseis e mitigando os efeitos do aquecimento global.",
                
                afirmacao: "afirmação"
            },
            {
                texto: "O pensamento evoluir faz-se crescer a buscar para soluções que levarão a evolução tanto da população quanto resolução de problemas complexos"
                ,
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "De que forma o Inclusão digital pode auxiliar na formação de novas  profissões que promovam um futuro mais sustentável?" ,

        alternativas: [
            {
                texto: "Acesso à Educação e Treinamento, empreendedorismo e inovação, Trabalho remoto e Freelance"
                afirmacao: "afirmação",
            },
            {
                texto: "Acessibilidade com tecnologias assistivas, comunidades online, facilitando o acesso ao conhecimento.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Nos dias atuais percebemos que diversas alterações climáticas estão causando desastres naturais com uma intensidade que era esperada para daqui a 20 anos. Cada vez mais estão se confirmando episódios de desastres naturais devido ao aquecimento global. Esse cenário demanda o surgimento de novas profissões que venham a mitigar esse quadro. Para o seu futuro, você escolherá qual tipo de profissão?",

        alternativas: [
            {
                texto: "Eu não acredito no aquecimento global é fake news! Eu me importo com uma profissão rentável!",
                afirmacao: "afirmação"
            },
            {
                texto: "Eu acredito no aquecimento global e vou me focar em profissões tecnológicas que ajudem na mitigação!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];