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

// Tipos em JavaScript: String

const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

// Exemplo de uma função template String

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

// Tipos em JavaScript: Booleans (True or false)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo)

// Os verdadeiros

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log({})
console.log(!!(isAtivo = true))

//Os falsos

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(undefined)
console.log(!!(isAtivo = false))

console.log('Finalizando')
console.log(!!('' || null || 0 || 'Hello')) // Irá mostrar apenas o valor "True"

// Exemplo de uso diverso
let nome = '' // SE não possuir entrada, irá mostrar desconhecido
console.log(nome || 'Desconhecido') //Seguindo esta linha

// Tipos em JavaScript: Array



