/* Написать функцию, которая создает пустой объект, но без прототипа. */



const emptyObject = () => {
    return Object.create(null)
}

console.log(emptyObject) // [Function: emptyObject]
// В строчке выше выводится [Function: emptyObject], потому что вы передаете в консоль саму функцию, не вызывая её. Если вызвать функцию (т.е. написать emptyObject() вместо emptyObject), в консоль будет выводится объект, как и во втором варианте. Они почти на 100% аналогичны :)

function createEmptyObject() {
    return Object.create(null)
}

const emptyObjectV2 = createEmptyObject()

console.log(emptyObjectV2) // [Object: null prototype] {}

/* 
В гугле выдает первым же выводом второй вариант реализации, 
но вместе с ним пришел в голову первый вариант
*/