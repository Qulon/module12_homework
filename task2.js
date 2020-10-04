/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

const obj = {
    test1: 'Object1',
    test2: 'Object2'
}

function argAndObject(str, obj) {
    console.log(str in obj)

}

argAndObject('test', obj)
argAndObject('test1', obj)