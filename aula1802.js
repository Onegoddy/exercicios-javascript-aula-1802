// Exercício 1: Arrow Function com um parâmetro
// Crie uma arrow function chamada dobro que recebe um número e retorna o dobro dele.
// Dica: Não use {} nem return, pois a função pode ser simplificada.
// 📌 Exemplo de entrada e saída esperada:
// console.log(dobro(7)); // 14
// console.log(dobro(15)); // 30
const dobro = x => x * 2;
console.log(dobro(3)); // 6
 
// Exercício 2: Arrow Function com múltiplos parâmetros
// Crie uma arrow function chamada dividir que recebe dois números e retorna o resultado da divisão do primeiro pelo segundo.
// 📌 Exemplo de entrada e saída esperada:
// console.log(dividir(10, 2)); // 5
// console.log(dividir(9, 3));  // 3
const dividir = (a, b) => a / b;
console.log(dividir(9, 3)); // 3
 
// Exercício 3: Arrow Function com múltiplas linhas
// Crie uma arrow function chamada mensagemBoasVindas que recebe um nome e retorna uma mensagem de boas-vindas no formato "Seja bem-vindo, [nome]!".
// 📌 Exemplo de entrada e saída esperada:
// console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"
// console.log(mensagemBoasVindas("Ana"));    // "Seja bem-vindo, Ana!"
const mensagemBoasVindas = (nome) => {
    return `Seja bem-vindo, ${nome}!`;
};
console.log(mensagemBoasVindas("João")); // "Seja bem-vindo, João!"
 
// Exercício 4: Crie uma função chamada executarOperacao que recebe três parâmetros: dois números e uma função que representa uma operação matemática (adição, subtração, multiplicação ou divisão).
// Em seguida, chame essa função passando diferentes operações matemáticas como arrow functions.
// 📌 Exemplo de entrada e saída esperada:
// console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
// console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20
const executarOperacao = (a, b, operacao) => operacao(a, b);
console.log(executarOperacao(5, 3, (a, b) => a * b)); // 15
 
// Exercício 5: map() – Transformação de um array
// Crie um array de preços de produtos e use o método map() para aplicar um desconto de 10% em cada preço.
// 📌 Exemplo de entrada e saída esperada:
// const precosComDesconto = /* aplique map() aqui */;
// console.log(precosComDesconto); // [90, 180, 270, 360]
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(x => x - (x * 0.1));
console.log(precosComDesconto); // [90, 180, 270, 360]
 
// Exercício 6: filter() – Filtrando valores em um array
// Crie um array com idades e use o método filter() para retornar apenas as idades menores que 18 anos.
// 📌 Exemplo de entrada e saída esperada:
// const menoresDeIdade = /* aplique filter() aqui */;
// console.log(menoresDeIdade); // [12, 17, 14]
const idades = [20, 12, 21, 18, 17, 14];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]
 
// Exercício 7: reduce() – Somando valores de um array
// Crie um array com números e use o método reduce() para calcular o produto (multiplicação de todos os números).
// 📌 Exemplo de entrada e saída esperada:
// const produto = /* aplique reduce() aqui */;
// console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)
const valores = [2, 3, 4, 5];
const produto = valores.reduce((total, num) => total * num, 1);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)