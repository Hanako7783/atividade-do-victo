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