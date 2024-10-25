class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
  }
}

const herois = [
  new Heroi('Hagar', 51, 'guerreiro'),
  new Heroi('Gandalf', 2000, 'mago'),
  new Heroi('Bruce Lee', 32, 'monge'),
  new Heroi('Naruto', 15, 'ninja')
];

for (let heroi of herois) {
  heroi.atacar();
}