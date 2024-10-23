const nomeDoHeroi = "Starius";

function classificarHeroi(numerosDeLutas) {
    if (numerosDeLutas === 0) {
        return "Sem lutas";
    } else if (numerosDeLutas <= 10) {
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

let numerosDeLutasDoHeroi = 0;
let classificacaoDoHeroi = classificarHeroi(numerosDeLutasDoHeroi);

console.log(`O Herói ${nomeDoHeroi} tem de saldo ${numerosDeLutasDoHeroi} lutas, e está no nível de ${classificacaoDoHeroi}.`);