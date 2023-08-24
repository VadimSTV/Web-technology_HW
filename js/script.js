function askName() {
    let name = prompt("Привет, как тебя зовут?", "введите здесь имя");
    alert(`Приветствую тебя, ${name}!`);
}

askName()

function askAge() {
    let age = prompt('Введите свой возраст!');
    
    switch(age) {
        
        case '10':
        case '11':
        case '12':
        case '13':    
        case '15':{
            alert('Вам не достаточно лет! ');
            break;
        }
        case '18':
        case '19':
        case '20':
        case '21':{
            alert('Вы совершеннолетний, добро пожаловать!');
            break;
        }
        case '25':
        case '26':
        case '27':
        case '28':
        case '30':    
        {
            alert('У вас вся жизнь впереди!')
            break;
        }
        default:{
            alert('(-_-)')
        }
    }
}

askAge()

function changeColor() {
let paragraph2 = document.getElementById("paragraph");
console.log(paragraph2);
let paragraph3 = document.getElementById("paragraph1");
console.log(paragraph3);

// if (paragraph2.classList.contains("yellow")){
//     paragraph2.classList.remove("yellow");
//     paragraph3.classList.remove("yellow");
// }
// else {
//     paragraph2.classList.add("yellow");
//     paragraph3.classList.add("yellow");
// }
paragraph2.classList.toggle("yellow");
paragraph3.classList.toggle("yellow");

paragraph2.textContent = paragraph2.textContent == "Действие работы тернарного оператора JS" ? "Меняем текст" : "Действие работы тернарного оператора JS";

}

let btn1 = document.getElementById("btn");
console.log(btn1);
btn1.addEventListener('click', changeColor)
