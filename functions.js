/* Функция - подпрограмма для определенной задачи */
/* 
ключ.сл. название    параметры через запятую  */
function add_to_cart(tovar, kolichestvo) {
    /*  параметров может не быть
    параметр может быть один
    несколько параметров разделяется запятой */
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var txt = document.createTextNode(tovar);
    td.appendChild(txt);
    tr.appendChild(td);
    txt = document.createTextNode(kolichestvo);
    td = document.createElement('td');
    td.appendChild(txt);
    tr.appendChild(td);
    return tr; // вернуть полезный результат
}

function выбрать_уровень(рост) {
     if (рост < 130) {
        return 'Малышовая трасса';
     }
     if (рост < 145) {
        return 'Зеленая и малошовая трасса';
     }
     if (рост < 160) {
        return 'Красная, зеленая и малошовая трасса';
     }
     return 'Все трассы';
}

/* стрелочные функции не пишутся "в чистом поле" */
() => {
    console.log('Неуловимый Джо');
}

/* Стрелочные функции:
Привязываются к событиям
Передаются в другие функции
Сохраняются в переменных и т.д.

*/

6;


// Событие "страничка загрузилась"
window.onload = () => {
    console.log('Уловимый Джо');
};
