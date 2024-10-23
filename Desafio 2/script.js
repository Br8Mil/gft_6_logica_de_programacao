const nomeDoHeroi = "Starius";
let numerosDeLutasDoHeroi = 0;

function classificarHeroi(numerosDeLutas) {
    if (numerosDeLutas <= 10) {
        return "Ferro";
    } else if (numerosDeLutas <= 20) {
        return "Bronze";
    } else if (numerosDeLutas <= 50) {
        return "Prata";
    } else if (numerosDeLutas <= 80) {
        return "Ouro";
    } else if (numerosDeLutas <= 90) {
        return "Diamante";
    } else if (numerosDeLutas <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

while (numerosDeLutasDoHeroi <= 0) {
    numerosDeLutasDoHeroi = parseInt(prompt("Digite um número diferente de zero para ver em que nível o herói está:"));
}

let classificacaoDoHeroi = classificarHeroi(numerosDeLutasDoHeroi);

console.log(`O Herói ${nomeDoHeroi} tem de saldo ${numerosDeLutasDoHeroi} lutas, e está no nível de ${classificacaoDoHeroi}.`)