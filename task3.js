/* Написать функцию, которая создает пустой объект, но без прототипа. */



const emptyObject = () => {
    return Object.create(null)
}

console.log(emptyObject) // [Function: emptyObject]

function createEmptyObject() {
    return Object.create(null)
}

const emptyObjectV2 = createEmptyObject()

console.log(emptyObjectV2) // [Object: null prototype] {}

/* 
В гугле выдает первым же выводом второй вариант реализации, 
но вместе с ним пришел в голову первый вариант
*/