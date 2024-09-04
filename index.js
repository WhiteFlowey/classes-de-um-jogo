class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
        return ataque; // Retorna o ataque para uso posterior
    }
}

// Função para solicitar entrada do usuário
function obterEntradaDoUsuario(mensagem) {
    return prompt(mensagem);
}

let desejaParar = "não";

while (desejaParar.toLowerCase() !== "sim") {
    // Solicitando informações do usuário
    const nome = obterEntradaDoUsuario("Digite o nome do herói:");
    const idade = parseInt(obterEntradaDoUsuario("Digite a idade do herói:"));
    const tipo = obterEntradaDoUsuario("Digite o tipo do herói (guerreiro, mago, monge, ninja):");

    // Criando o herói com as informações fornecidas
    const heroi = new Heroi(nome, idade, tipo);

    // Realizando o ataque e obtendo a descrição do ataque
    const ataque = heroi.atacar();

    // Exibindo informações e perguntando ao usuário se deseja parar
    desejaParar = obterEntradaDoUsuario(`O herói ${nome}, de ${idade} anos, um ${tipo},  ${ataque}. Deseja parar? (sim/não)`);
}

console.log("Programa encerrado.");
