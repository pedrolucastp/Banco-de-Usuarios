/* -------------Exercicio GET-SET------------- */

/* class ConstroiPessoa {
    constructor(nome,email,idade) {
    this.nome = nome
    this.email = email
    this.idade = idade
    }
  }
  
  const pessoa = new ConstroiPessoa ('Pedro', 'pedrolucasp@email.com', 31)
  
  console.log(pessoa) */

/* // 1. A partir do objeto:
    
  const caneta = {
    marca: 'bic',
    tipo: 'esferográfica',
  }
      
  // Crie um novo objeto canetaVermelha com as mesmas propriedades e 
  // valores da caneta acima, mas com a propriedade cor com o 
  // valor vermelha.
  
  const canetaVermelha = {
    ...caneta,
    cor: "vermelha",
  };
  console.log(canetaVermelha) */

/* // 2. Faça um objeto pessoa com as propriedades nomeCompleto, email 
  // e primeiroNome (com get).
  
  const pessoa = {
    nomeCompleto: "Lorem Ipsum",
    email: "loremipsums@email.com",
    get primeiroNome() {
      return this.nomeCompleto.split(" ")[0]
    },
  };
  console.log(pessoa.primeiroNome) */

// 3. Faça um objeto TV com as propriedades canal, volume e ligada
// e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.

/* const CANAL_DEFAULT = 2
  const VOLUME_DEFAULT = 0
  
  const tv = {
  canal: CANAL_DEFAULT,
  volume: VOLUME_DEFAULT,
  ligada: false,
  
  liga() {
    if (! this.ligada) {
      this.ligada = true
    }
  },
  desliga() {
    if (this.ligada) {
      this.ligada = false
    }
  },
  
  mudaDeCanal(canal) {
    this.canal = canal
  },
  
  aumentaVolume() {
    if (this.volume < 100) {
    this.volume += 1
    }
  },
  
  aumentaVolume() {
    if (this.volume > 0) {
    this.volume -= 1
    }
  },
  
  }
  
  
  console.log(tv)
  tv.canal = 1
  console.log(tv)
  tv.volume = +10
  console.log(tv)
  tv.ligada = false
  console.log(tv)
  mudaDeCanal(25)
  console.log('canal da tv: ' + tv.canal) */

// 4. Refaça o exercício da TV utilizando uma função construtora.
/* const CANAL_DEFAULT = 1;
const VOLUME_DEFAULT = 0;
const LIGADA_DEFAULT = false;

function constroiTv() {
    this.canal = CANAL_DEFAULT
    this.volume = VOLUME_DEFAULT
    this.ligada = LIGADA_DEFAULT
}

constroiTv.prototype.liga = function() {
    if (!this.ligada) {
        this.ligada = true
    }
}

constroiTv.prototype.desliga = function() {
    if (this.ligada) {
        this.ligada = false
    }
}
constroiTv.prototype.mudaDeCanal = function(canal) {
    this.canal = canal
}
  
constroiTv.prototype.aumentarVolume = function() {
    if (this.volume < 100) {
    this.volume += 1
    }
}
  
constroiTv.prototype.diminuirVolume = function() {
    if (this.volume > 0) {
    this.volume -= 1
    }
}

const tv = new constroiTv()
const tv2 = new constroiTv()

console.log(tv) */

// 5. Refaça o exercício da TV utilizando a sintaxe de classe (class).

/* const CANAL_DEFAULT = 1;
const VOLUME_DEFAULT = 0;
const LIGADA_DEFAULT = false;

class ObjetoTv {
    constructor(mudaCanal, mudaVolume, ligada) {
    this.canal = mudaCanal
    this.volume = mudaVolume
    this.ligada = ligada
    }
}
const status0 = new ObjetoTv (CANAL_DEFAULT,VOLUME_DEFAULT,LIGADA_DEFAULT)
const status1 = new ObjetoTv (status0.canal,status0.volume, true)
const status2 = new ObjetoTv (2, status1.volume + 1,status1.ligada)
const status3 = new ObjetoTv (status2.canal, status2.volume, false)
console.log(status0)
console.log(status1)
console.log(status2)
console.log(status3) */

// 6. Crie uma classe Carro que tenha as propriedades cor, marca, modelo
// (sedan ou hatch), capacidadeDoTanque (em litros), tipoDeCombustível 
// (gasolina, álcool ou flex) e um método abastecer que respeite o tipo 
// de combustível que o automóvel aceita e a capacidade máxima de litros.
// Além de abastecer o carro, também devemos ter o preço do abastecimento
// (gasolina = R$ 5,62/L e etanol = R$ 4,16/L).
