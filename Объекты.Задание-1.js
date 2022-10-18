/*
***
Объекты.Задание 1

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

const obj = {
    a: 123,
    b: 'abc',
    c: true
  };
  
  const keysAndValues = (obj) => {
    for(let key in obj){
      if ( obj.hasOwnProperty(key) ){
        console.log(`ключ: ${key}, значение: ${obj[key]}`);
      }
    }
  };
  
  keysAndValues(obj);