/*
***
Объекты.Задание 2

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

const obj = {
    a: 123,
    b: 'abc',
    c: true
  };
  
  const str = 'abc';
  
  const hasString = (obj, str) => {
    let result = false;
    for(let key in obj){
      if( key === str || obj[key] === str ) result = true;
    }
    return result;
  }
  
  console.log(hasString(obj, str));