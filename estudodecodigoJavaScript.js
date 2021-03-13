//Exemplos de trechos de código e utilização de funções com JavaScript, acompanhamento curso Udemy C0d3r Websites modernos 2021
// Exemplo de uma sentença de código em JavaScript
//Regras básicas

console.log("Sentença de código")

// Forma de abertura e fechamento de blocos de códigos, seguindo a regra que um bloco deverá sempre estar dentro de outro.
{
    {
        console.log("Olá mundo"); //Aspas duplas com ";"
     
        console.log('Olá mundo')  //Aspas simples, sem ";"
    }
}

/*

Comentário de mutíplas linhas, exemplo de código

*/ 

//Formas de declarar variáveis (var,let e const)

//Variáveis declaração simples (var e let)
// Printar resultado no console
var a = 3           // Permite que a mesma variável sofra alterações de novas declarações
let b = 30          //Não permite uma nova declaração de valor, após ter sido criada e declarada.
console.log(a, b)

// Declaração de uma variável constante
//Printar resultado no console
const c = 5         // Quanto mais "constantes" melhor será para manter o seu código.
console.log(c)

// JavaScript é uma linguagem de tipagem fraca, isso que dizer que o tipo de cada variável pode mudar de acordo com a declaração.

let d = 'valor'     // Primeiro valor é uma String
console.log(d)
console.log(typeof d)

d = 3               // Segundo valor é int
console.log(typeof d , d)

// Tipos em JavaScript: Number

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1)                       // Exibe o valor de peso1 no console
console.log(Number.isInteger(peso1))    // Aqui será confirmado se a variável peso1 é integer, e irá retornar true

// 
