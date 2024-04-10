const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

console.log(meuSet);



const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);


const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(cliente)


const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
VM344:8 O nome do cliente é Andre e essa pessoa tem 32 anos.
VM344:12 Os 3 primeiros digitos do CPF são 112
undefined



const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});


const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);





































