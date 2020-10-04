/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
 и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

const minorObj = {
    test1: 'minorObject1',
    test2: 'minorObject2'
}

const mainObj = Object.create(minorObj)
mainObj.test3 = 'mainObject1'
mainObj.test4 = 'mainObject2'

function allKeysAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, значение ключа: ${obj[key]}`)
        }
    }
}

allKeysAndValues(mainObj)