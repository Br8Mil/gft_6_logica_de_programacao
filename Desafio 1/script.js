const nomeDoHeroi = "Starius";
let xpDoHeroi = 0;
let classificacaoDoHeroi = "";

while (xpDoHeroi === 0) {
    xpDoHeroi = parseInt(prompt("Digite um número diferente de zero para ver em que nível o herói está:"));
}

if (xpDoHeroi <= 1000) {
	classificacaoDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    classificacaoDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    classificacaoDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    classificacaoDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    classificacaoDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    classificacaoDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    classificacaoDoHeroi = "Imortal";
} else if (xpDoHeroi >= 10001) {
    classificacaoDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + classificacaoDoHeroi);