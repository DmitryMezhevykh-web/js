//1.Дано целое число. С помощью тернарного оператора определить четное оно или нет.

let x = parseInt(prompt("Введите целое число:", ""));

let result = x % 2 == 0 ? "Число четное" : "Число нечетное"

console.log(result);

//2.Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.

let n = 8.5;
let m = 11.45;
let b = 10;

result = ((n % 10)==b) || ((m % 10)==b) ? "8.5 ближе к 10" :
    "11.45 ближе к 10";
console.log(result);

//3.Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь. Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.
let a = 11; //длинна
let b = 9; //высота
let c = 10; //ширина

result = S=2*(a*b*c);
if (a>b) {
    console.log ("Длинна больше высоты");
     
} else if (b>a) {
    console.log ("Высота больше длинны");
};

//homework2
//1.Дан массив целых чисел. Числа не отсортированы и могут повторяться. Необходимо найти в данном массиве такие два числа M и N, чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд. Для решения достаточно найти хотя бы одну подходящую пару чисел M и N.
let ar = [1, 0, 3, -10, -9, 6, 4, 9, -2];
for (i = 0; i < ar.length; i++) {
    for (j = 0; j < ar.length; j++) {
        if (i !== j && i + j ===7){
            console.log("числа " + [i],[j] + " равны при сложении 7");
        }
    }
}
//2.Вывести через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’. Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("ThreeFive");
    } else if (i % 5 === 0) {
        console.log("Five");
    } else if (i % 3 === 0) {
        console.log("Three")
    } else {
        console.log(i);
    }
}

//3.Задать количество тарелок и количество моющего средства. Моющее средство расходуется из расчета 0,5 на одну тарелку. В цикле выводить сколько моющего средства осталось после мытья каждой тарелки В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
let plate = 30;
let fairy = 5;
do {
    console.log("средство осталось = " + fairy);
    plate--;
    fairy = fairy - 0.5;
} while (fairy > 0 && plate > 0);
// if (plate === 0 && fairy === 0) {
if (!plate && !fairy) {
    console.log("тарелки и моющее средство кончилось");
} else if (fairy === 0) {
    console.log("средство кончилось,тарелок осталось = " + plate);
} else if (plate === 0){
    console.log("тарелки кончились,средства осталось = " + fairy);
}

//4.Создайте 2 массива равной длины, выведите массивы на экран. Посчитайте среднее арифметическое элементов каждого массива и сообщите, для какого из массивов это значение оказалось больше (либо сообщите, что их средние арифметические равны).
let arr1 = [7, 4, 9, 11, 19];

let arr2 = [5, 7, 1, 4, 22];

let mean1 = 0;
let mean2 = 0;

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
}

mean1 = sum1/arr1.length;
mean2 = sum2/arr2.length;

if (mean1>mean2) {
    console.log("Среднее арифметическое первого массива больше");
} else if (mean1<mean2) {
    console.log("Среднее арифметическое второго массива больше");
} else { console.log("Средние арифметические массивов равны"); }


//5.1 Пользователь вводит число, создать массив заданного размера, вывести элементы массива в обратном порядке 

let numArr = parseInt(prompt("Количесво элементов массива: ", 1));
let stepArr = parseInt(prompt("Шаг массива: ", 1));

function makeReversArr(numArr, stepArк){
    let arr = [];
    let revers = [];
    let step = stepArr;
    for (let i = 0; i < numArr; i++) {
        arr[i]= step;
        step += stepArr;
    }
    for (let i = arr.length-1, j=0; i >= 0; i--,j++) {
        revers[j] = arr[i];
    }
    return revers;
}
console.log(makeReversArr(numArr, stepArr));

//5.2Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128

let arr = [1,2,4,8,16,32,64];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]*2);
};

n=1;

for (let i = 1; i <=20; i++) {
    n+=n;
    console.log(n);
}

//5.3 Напишите цикл, который выводит в консоль треугольник из символов #, высотой 10 символов.

let lines = 7;
let str = " ";
let star = "*";
for(let i = 0; i < lines; i++){
    str += star;
    console.log(str);
}

//homework 3

//1. Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).

function func(num) {
    if (num < 0) {
        return "не натуральное число";
    }
    if (num < 10) {
        return num;
    }
    let ostatok = num % 10;
    let summa = Math.floor(func(num / 10)) + ostatok;
    return summa;
}
console.log(func(11));

//3.Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет возвращать слово «день» в нужной форме («12 дней», но «22 дня» и тд).

function count(number) {
    let res = number % 10;
    if (number === 11 || number === 12 || number === 13 || number === 14){
        console.log(number + ' дней');
    } else if (res === 1){
        console.log(number + ' день');
    } else if (res === 2 ||res === 3  || res === 4) {
        console.log(number + ' дня');
    } else if (res === 5 || res === 6 || res === 7 || res === 8 || res === 9 || res === 0) {
        console.log(number + ' дней');
    }
}
count(20);
count(66);
count(1);
count(11);
count(13);
count(846314);
count(34);
count(21);

//homework4
//2.Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной. Переставьте названия так, чтобы они были упорядочены по алфавиту.
let arrayCities = ["Moscow", "Rostov", "Murmansk", "Samara", "Kaliningrad", "Kursk"];
console.log(arrayCities.sort());

let enter = prompt("Введите города");
console.log(enter);
let arr = enter.split(" ");
console.log(arr.sort());
enter = prompt("Введите города через запятую, без пробела");
console.log(enter);
arr = enter.split(",");
console.log(arr.sort());

//3. Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь.
let string = prompt("Введите текст");
let subString = prompt("введите что искать")
console.log(`строка "${string}", длиной ${string.length}`);
console.log(`подстрока "${subString}", длиной ${subString.length}`);
let start = 0;
if (string.includes(subString)) {
    while (true) {
        let found = string.indexOf(subString, start);
        if (found == -1) break;
        console.log(`Вхождение подстроки в строку на индексе ${found}`);
        start = found + 1;
    }
} else console.log("Совпадений нет");