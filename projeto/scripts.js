/*

console.log("hello,world")
//variavel
var x = 10
//formas mais convenientes de declarar variavéis


z = 10
const t = z+10
y = 20
 console.log(y)
 if(1){
    let y = 15
 console.log(y)
 }
 console.log(y)

 // tipos

 const nome = "victo"
 console.log(nome)
 console.log(typeof nome)
 const idade = 21
 console.log(idade)
 console.log(typeof nome)
 const peso = 72.3
 console.log(peso)
 console.log(typeof peso)

 // null
 const nada = null
 console.log(nada)
 console.log(typeof nada)

 // undefined
 const indefinido = null
 console.log(indefinido)
 console.log(typeof indefinido)

 // bool
 const vouf = ''
 console.log(vouf)
 console.log(typeof vouf)

 //array

 const vetor = ['Java',10,false]
 console.log(vetor[1])
 console.log(typeof vouf)

 console.log(vetor.legth)


S
 
// object literals
 const usuario = {
    email:'eu@email.com',
    senha:'teste123',
    nome:'Victor',
    idade: 31
 }

 console.log(typeof usuario)
 const nome = "Victor Vieira"

 console.log(nome.length)
 //const stringParaVetor = nome.split('')
 //console.log(splitParaVetor)
 console.log(nome.toUpperCase())
 console.log(nome.toLowerCase())
 const nomeMaiusculo = nome.toUpperCase()
 console.log(nomeMaiusculo)
 console.log(nomeMaiusculo[0])
 console.log(nomeMaiusculo[nomeMaiusculo.length-1])
 console.log(nomeMaiusculo.slice(2,-1))
 console.log(nomeMaiusculo.slice(0,6))

 // arrays, vetores, listas
*/

 const lista = ['a',"b","c","d",'e']
 console.log(lista.length)
 console.log(lista[2])
 console.log(typeof lista)
 lista[5] = 'f'
 console.log(lista[5])
 lista[0]='x'
 console.log(lista)
 lista.push('g')
 console.log(lista)
 lista.pop()
 console.log(lista)
 lista.shift()
 lista.shift()
 lista.shift()
 console.log(lista)
lista.unshift('h')
console.log(lista)



//object literais - estruturas que descrevem entidade

const produto ={
   nome:'camisa',
   preco:9.99,
   emEstoque: true,
   size:['P','M','G'],
   'Cor': 'azul'
}
produto.nome
produto['nome']
console.log(produto['preco'])

// destructuring - recurso para objetos
const {preco,emEstoque} = produto
console.log(preco)
console.log(emEstoque)

const [char1,char2] = lista
console.log(char1)
console.log(char2)


//json -javaScrip objeto notation
const douguinho ={
   nome: 'Scooby',
   idade:10
}

const json = JSON.stringify(douguinho)
console.log(json)
const json2 = JSON.parse(json)
console.log(json2)
const jsonErrado = JSON.stringify('{"nome":"Scooby","idade":10,}')
console.log(jsonErrado)