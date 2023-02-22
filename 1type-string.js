// Criando texto

const texto1 = "Olá, mundo!"; 

// Pode ser aspas duplas ou simples

const texto2 = 'Olá, mundo!';

const senha = "senhassupersegura123!";

const seqNumeros = "123456";

// Em caso de citação em texto, usar aspas simples e duplas

const citacao = 'O Leo disse "Oi"';

console.log(citacao)

// CONCATENAÇÃO [+]:

const meuNome = "Luan.";
const fraseExemplo = "Meu nome é ";

console.log(fraseExemplo + meuNome)

// Codificação de Strings

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Padronização de comparação entre strings:

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos (Case Sensitive)

//Solução:
//DESCOMENTAR as linhas abaixo e comentar as acima (Ctrl + ;)

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

//Contagem de caracteres numa string

const tamanhoSenha = "minhaSenha123"
console.log(tamanhoSenha.length) // 13 caracteres
