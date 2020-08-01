// 1
var a = 1,
    b = 1,
    c, d;
c = ++a;
console.log(c); // 2 Сначала к переменной добавляет 1, а потом возвращает значение
d = b++;
console.log(d); // 1 Сначала возвращается занчение, а потом добавляется 1
c = (2 + ++a);
console.log(c); // 5 а=2 так как мы ее перезаписали на 2 строчке. 
d = (2 + b++);
console.log(d); // 4 b=2 после перезаписи на 3 строке, по аналогии сначала вывели 4 потом добавили 1
console.log(a); // 3 изначально 1, потом добавили 1 на 2 строке и еще 1 на 4
console.log(b); // 3 изначально 1, потом добавили 1 на 3 строке и еще 1 на 5




// 2
console.log("Задание № 2");
var z = 2;
var x = 1 + (z *= 2); // z *=2 тоже самое что z=z*2
console.log(x); //5





// 3
console.log("Задание № 3");
var a = -2;
var b = 3;
if ((a >= 0) && (b >= 0)) {
    console.log(a - b);
} else if ((a < 0) && (b < 0)) {
    console.log(a * b);
} else if (((a >= 0) && (b < 0)) || ((a < 0) && (b >= 0))) {
    console.log(a + b);
}



// 4
console.log("Задание № 4 Присвоить переменной а значение в промежутке [0..15]");
a = Math.floor(Math.random() * 16); // до 16, т.к. единица в рандом не входит, а округление в меньшую сторону
console.log(a);
// Или посложнее, как на уроке
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
// a = getRandomInt(15);
// console.log(a);
console.log("Задание № 4.1  С помощью оператора switch организовать вывод чисел от a до 15")
switch (a) {
    case 0:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 1:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 2:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 3:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 4:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 5:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 6:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 7:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 8:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 9:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 10:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 11:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 12:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 13:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 14:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;
    case 15:
        console.log("числа от а до 15")
        for (a; a < 16; a++) {
            console.log(a);
        }
        break;

}



// 5
console.log("Задание № 5  x=2  y=3");
var result;

function plus(x, y) {
    return (x + y)
}
result = plus(2, 3);
console.log("+  " + result);


function minus(x, y) {
    return (x - y)
}
result = minus(2, 3);
console.log("-  " + result);

function multiply(x, y) {
    return (x * y)
}
result = multiply(2, 3);
console.log("*  " + result);

function divide(x, y) {
    return (x / y)
}
result = divide(2, 3);
console.log("/  " + result);


//6
console.log("Задание № 6 в алерте");
var arg1, arg2, operation;
alert("Это Задание № 6, остальные в консоле");

arg1 = parseInt(prompt('введите первое число'));
arg2 = parseInt(prompt('Введите второе число'));
operation = prompt("Какое действие с ними выполнить? Скопируйте одно из-> + или - или * или /");


function mathOperation(arg1, arg2, operation) {


    switch (operation) {
        case '+':
            return plus(arg1, arg2);
        case "-":
            return minus(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        case "/":
            return divide(arg1, arg2);
    }
}
var victory;
victory = mathOperation(arg1, arg2, operation);
alert(arg1 + " " + operation + " " + arg2 + " " + "=" + " " + victory);

//7
console.log("Задание № 7");
console.log(null == 0); // они не равны
console.log(typeof null); // тип данных объект
console.log(typeof 0); // тип данных число
// как я понял 0 это число, undefined это неопределенность, а null это конкретное отсутствие.
// Например когда мы хотим получить несуществующий объект будет null


//8 
console.log("Задание № 8 в алерте");
alert("Это Задание № 8");
val = parseInt(prompt('Введите число, которое будем возвадить в степень'));
pow = parseInt(prompt('Введите степень'));

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
result = power(val, pow);
alert(result);