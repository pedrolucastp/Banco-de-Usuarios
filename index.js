let usuarios = [];

function atualizaContador() {
  quantidade = usuarios.length;
  document.getElementById("contador").innerText = quantidade;
}

function criarUsuarioAleatorio() {
  faker.locale = "pt_BR";
  let quantidade = parseInt(prompt("Informe quantos aleatorios adicionar"));
  let usuariosAleatorios = Array.from({ length: quantidade }, () => ({
    nomeCompleto: faker.name.findName(),
    email: faker.internet.email(),
    tel: faker.phone.phoneNumber(),
    estado: faker.address.state(),
    avatar: faker.internet.avatar(),
    get userName() {
      let userName = this.nomeCompleto.split(" ").join("");
      return userName.toLowerCase();
    },
    get titulo() {
      let tituloSeparado = this.nomeCompleto.split(" ");
      let [titulo, ...nome] = tituloSeparado;
      return titulo.slice(-1) === "." ? titulo : "";
    },
    get nome() {
      let nomeSeparado = this.nomeCompleto.split(" ");
      let [a, b, ...c] = nomeSeparado;
      return a.slice(-1) === "." ? b : a;
    },
    get sobreNome() {
      return this.nomeCompleto.split(" ").slice(-1).join(" ");
    },
  }));
  for (usuario of usuariosAleatorios) {
    usuarios.push(usuario);
  }
  atualizaContador();
}

function exibirUsuarios() {
  apagarQuadro();
  for (usuario of usuarios) {
    elemento = document.createElement("P");
    texto1 = document.createTextNode(usuario.nomeCompleto);
    elemento.appendChild(texto1);
    document.getElementById("quadro").appendChild(elemento);
  }
  console.log("Usuarios registrados:\n", usuarios);
  atualizaContador();
}

function buscarUsuario() {
  let buscar = prompt("Encontre por um nome ou email");
  apagarQuadro();

  for (usuario of usuarios) {
    if (buscar === usuario.nome || buscar === usuario.email || buscar === usuario.estado) {
      console.log(usuario);
      detalhesUsuario();
    }
  }
}

function detalhesUsuario() {
  elemento = document.createElement("DIV");

  img = new Image();
  img.src = usuario.avatar;
  elemento.appendChild(img);

  texto = document.createElement("P");

  titulo = document.createTextNode(usuario.nomeCompleto);
  texto.appendChild(titulo);
  espaco0 = document.createElement("BR");
  texto.appendChild(espaco0);
  nome = document.createTextNode(usuario.userName);
  texto.appendChild(nome);
  espaco1 = document.createElement("BR");
  texto.appendChild(espaco1);
  email = document.createTextNode(usuario.email);
  texto.appendChild(email);
  espaco2 = document.createElement("BR");
  texto.appendChild(espaco2);
  tel = document.createTextNode(usuario.tel);
  texto.appendChild(tel);
  elemento.appendChild(texto);
  espaco3 = document.createElement("BR");
  texto.appendChild(espaco3);
  cidade = document.createTextNode(usuario.estado);
  texto.appendChild(cidade);
  elemento.appendChild(texto);

  document.getElementById("quadro").appendChild(elemento);
}

function adicionarNovoUsuario() {
  faker.locale = "pt_BR";
  let usuario = {
    estado: faker.address.state(),
    tel: faker.phone.phoneNumber(),
    avatar: faker.internet.avatar(),

    get userName() {
      let userName = this.nomeCompleto.split(" ").join("");
      return userName.toLowerCase();
    },
    get titulo() {
      let tituloSeparado = this.nomeCompleto.split(" ");
      let [titulo, ...nome] = tituloSeparado;
      return titulo.slice(-1) === "." ? titulo : " ";
    },
    get nome() {
      let nomeSeparado = this.nomeCompleto.split(" ");
      let [a, b, ...c] = nomeSeparado;
      return a.slice(-1) === "." ? b : a;
    },
    get sobreNome() {
      return this.nomeCompleto.split(" ").slice(-1).join(" ");
    },
  };
  usuario.nomeCompleto = prompt("Infome o nome completo");
  usuario.email = prompt("Informe o e-mail");

  usuarios.push(usuario);
  exibirUsuarios();
}

function removerUsuario() {
  let remover = prompt("Remover por email\n(0 para remover todos)");
  let listaAtualizada = [];

  if (remover === "0") {
    usuarios = listaAtualizada;
  } else {
    for (usuario of usuarios) {
      if (remover !== usuario.email) {
        listaAtualizada.push(usuario);
      }
    }
    usuarios = listaAtualizada;
  }
  exibirUsuarios();
}

function organizaLista() {
  apagarQuadro();

  let listaOrganizada = [...usuarios];

  listaOrganizada.sort((a, b) =>
    a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
  );

  for (usuario of listaOrganizada) {
    elemento = document.createElement("P");
    texto1 = document.createTextNode(usuario.nome);
    elemento.appendChild(texto1);
    document.getElementById("quadro").appendChild(elemento);
  }
}

function limparConsole() {
  console.clear();
}

function apagarQuadro() {
  document.getElementById("quadro").innerHTML = "";
}

function exportaCSV() {
let csv = "nome completo, email, telefone, avatar, username, titulo, primeiro nome, ultimo nome\n";
for (cadaPerfil of usuarios) {
    for (cadaCampo in cadaPerfil) {
      info = cadaPerfil[cadaCampo];
      csv = csv + info + ", ";
    }
    csv = csv.slice(0, -2) + "\n";
  }
console.log(csv)
}

/* -------------Exercicio GET-SET------------- */

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

/* const tv = {
  get ligada() { 
    return this.ligada
  },

  get canal() {
    return this.canal
  },
  set canal(mudaDeCanal) {
    this.canal = mudaDeCanal
  },

  get volume() {
    return this.volume
  },
  set volume(aumentaVolume) {
    this.volume = aumentaVolume
  },
}
console.log(tv)
tv.canal = 1
console.log(tv)
tv.volume = +10
console.log(tv)
tv.ligada = false
console.log(tv) */
