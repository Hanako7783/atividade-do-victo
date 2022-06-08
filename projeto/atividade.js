const lista = ['l',"o","g","i",'c','a']

const lista2 = ['1',"2","3","4",'5','6']
console.log(lista2)




const [letral,letrao,letrag,letrai,letrac,letraa,] = lista
console.log(letral)
console.log(letrao)
console.log(letrag)

console.log(letrai)
console.log(letrac)
console.log(letraa)


const lista3 ={
n1:letral,
n2:letrao,
n3:letrag,
n4:letrai,
n5:letrac,
n6:letraa,



}

const json = JSON.stringify(lista3)

const json2 = JSON.parse(json)

console.log(json2)


const [n1,n2,n3,n4,n5,n6,] = lista2
console.log(n1)
console.log(n2)
console.log(n3)

console.log(n4)
console.log(n5)
console.log(n6)

const lista5 ={
    n1:n1,
    n2:n2,
    n3:n3,
    n4:n4,
    n5:n5,
    n6:n6,
}

const json7 = JSON.stringify(lista5)

const json8 = JSON.parse(json7)

console.log(json8)

console.log(n1+n2)
console.log(n1-n2)
console.log(n1*n2)
console.log(n1/n2)