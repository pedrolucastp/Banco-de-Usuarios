let usuarios = [];

class ConstroiPessoa {
  #nomeCompleto
  #tel
  #estado
  #avatar
  #uuid
  constructor(novoNome) {
    faker.locale = "pt_BR";
    this.#nomeCompleto = novoNome || faker.name.findName();
    this.#tel = faker.phone.phoneNumber();
    this.#estado = faker.address.state();
    this.#avatar = faker.internet.avatar();
    this.#uuid = faker.datatype.uuid();
  }
  get userName() {
    return this.nomeCompleto.split(" ").join("").toLowerCase();
  }
  get titulo() {
    let tituloSeparado = this.nomeCompleto.split(" ");
    let [titulo, ...nome] = tituloSeparado;
    return titulo.slice(-1) === "." ? titulo : "";
  }
  get nome() {
    let nomeSeparado = this.nomeCompleto.split(" ");
    let [a, b, ...c] = nomeSeparado;
    return a.slice(-1) === "." ? b : a;
  }
  get sobreNome() {
    return this.nomeCompleto.split(" ").slice(-1).join(" ");
  }
  get email() {
    let emailExemple = faker.internet.email();
    let dominio = emailExemple.split("@")[1];
    return this.userName + "@" + dominio;
  }
  // set nomeCompleto(novoNome)
  // return 
}

function criarUsuarioAleatorio() {
  let quantidade = parseInt(prompt("Informe quantos aleatorios adicionar"));
  i = 0;
  while (i < quantidade) {
    usuarios.push(new ConstroiPessoa());
    ++i;
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
  atualizaContador();
}

function buscarUsuario() {
  apagarQuadro();
  let buscar = prompt("Encontre usuarios por nome, email, estado ou id");
  for (usuario of usuarios) {
    if (
      buscar === usuario.nome ||
      buscar === usuario.email ||
      buscar === usuario.estado ||
      buscar === usuario.uuid
    ) {
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
  novoNome = prompt("Novo nome");
  usuarios.push(new ConstroiPessoa(novoNome));
  atualizaContador();
}

function editarUsuario() {
  let pessoaId = prompt("Encontre usuarios por uuid");
  for (usuario of usuarios) {
    if (pessoaId === usuario.uuid) {
      let opcao = prompt(
        "Escolha qual campo editar:\n1. Username\n2. Email\n3. Estado"
      );
      switch (opcao) {
        case "1":
          let novoUserName = prompt("Informe o novo nome de usuario");
          usuario.userName = novoUserName;
          break;
        case "2":
          let novoEmail = prompt("Informe o novo email");
          usuario.email = novoEmail;
          break;
        case "3":
          let novoEstado = prompt("Informe o novo estado");
          usuario.estado = novoEstado;
          break;
        default:
          console.log(`Desculpa, ${opcao} não encontrada.`);
      }
    }
  }
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

function limparConsole() {
  console.clear();
}

function organizaLista() {
  apagarQuadro();

  let listaOrganizada = [...usuarios];

  listaOrganizada.sort((a, b) =>
    a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
  );

  for (usuario of listaOrganizada) {
    elemento = document.createElement("P");
    texto1 = document.createTextNode(usuario.nomeCompleto);
    elemento.appendChild(texto1);
    document.getElementById("quadro").appendChild(elemento);
  }
}

function atualizaContador() {
  quantidade = usuarios.length;
  document.getElementById("contador").innerText = quantidade;
}

function apagarQuadro() {
  document.getElementById("quadro").innerHTML = "";
}

function exportaCSV() {
  let csv =
    "nome completo, email, telefone, avatar, username, titulo, primeiro nome, ultimo nome\n";
  for (cadaPerfil of usuarios) {
    for (cadaCampo in cadaPerfil) {
      info = cadaPerfil[cadaCampo];
      csv = csv + info + ", ";
    }
    csv = csv.slice(0, -2) + "\n";
  }
  console.log(csv);
}
