// ### First Task -> array.md ###
// 1-> Será fornecido um Array com quantidade de elementos ímpar.
// 2-> Todos os elementos podem ser espelhados exceto 1, que permanecerá desemparelhado.
// 3-> Escreva uma função que retorna o valor do elemento desemparelhado.

const arraySolution = (arr) => {
    let result;
    let comparison;
    let frequency= {};
    let counter;

    for (let i = 0; i<arr.length; i++){
        comparison = arr[i]
        frequency[comparison] = frequency[comparison] ? frequency[comparison] + 1 : 1;
    }

    counter = Object.keys(frequency);
    result = counter[Object.values(frequency).indexOf(1)]


    return result;
}

console.log(arraySolution([1,2,3,1,4,5,5,2,6,7,7,3,4]))

// ### Second Task -> distinct.md ### 
// 1-> Será fornecido um Array com uma quantidade aleatoria de elementos.
// 2-> Escreva uma função que retorna a quantidade de elementos distintos do array.

const distinctSolution = (arr) => {
    let result;
    let comparison;
    let frequency= {};
    let counter;

    for (let i = 0; i<arr.length; i++){
        comparison = arr[i]
        frequency[comparison] = frequency[comparison] ? frequency[comparison] + 1 : 1;
    }

    counter = Object.keys(frequency);
    result = counter.length;

    return result;
}

console.log(distinctSolution([1,2,3,1,4,5,2,6,3,2,5,8,3,4]))

// ### Third Taks => euclidean.md ###
// 1-> Serão dados dois numeros inteiros e positivos (N e M)
// 2-> N representará o número de chocolates em uma espaço numerados de 0 a N-1
// 3-> O primeiro chocolate a ser comido será o de indice 0, após comer o chocolate você 
// deixará a embalagem na mesma posição.
// 4-> Para comer o proximo chocolate você terá que pular algumas posições de acordo com o M-1
// se N=10 e M=2 ... você irá comer na seguinte sequencia: 0, 2, 4, 6, 8.
// 5-> Você irá parar de comer quando esbarrar em alguma embalagem sem chocolate, no exemplo
// acima você só comeria até o indice 8, pois o proximo seria o 0 que já está comido.
// 6-> o Desafio consiste em contar quantos chocolates você irá comer.
// 7-> Escreva uma função que recebe dois inteiros, e a partir deles retorne quantos 
// chocolates você irá comer (a função do exemplo acima retornaria 5).


const euclideanSolution = (m, n) => {

    let arr = [];
    let result = 0;
    let index;
   
    for(let i = 0; i < n; i++) {
        arr.push(1);
    }

    for(let j = 0; j < n; j++) {
        index = (j * m) % n
        if(arr[index] === 1) {
            arr[index] = 0;
            result++;
        } 
    }

    return result;
}
    
  
console.log(euclideanSolution(3,10))