// Место для первой задачи
function sayHello(name) {
    return('Привет, {name}!');
}
sayHello('Dima');
console.log(sayHello('Dima'));

// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}
console.log(returnNeighboringNumbers(3));

returnNeighboringNumbers(3);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';
    
    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(3,3)
console.log(getMathResult(3,3));