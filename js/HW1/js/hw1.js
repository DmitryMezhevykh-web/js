
//1. Дано целое число. С помощью тернарного оператора определить четное оно или нет.
let num = 22;

if (num%2 === 0) {
    console.log("Четное")
} else {
    console.log("Нечетное")
}

//2. Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.
//Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.
let n = -9.8;
let m = 9.9;
result = Math.abs(n - 10) > Math.abs(m - 10) ? "m" : "n";
console.log(result);

//3.Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
// Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль
let a = 3; //ширина
let b = 4; //высота
let c = 1; //длина
S = a * b * c;
console.log(S);
result = (a > b) ? "Ширина больше высоты" : "Высота больше ширины";
console.log(result);