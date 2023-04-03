const usdCurr = 18;
const eurCurr = 20;
const discount = 0.9;
function convert(amount ,curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(300,usdCurr));
promotion(convert(300,eurCurr));

//
const res = convert(300,usdCurr);
promotion(res);
//результат одинаковый


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }

    console.log("Done");
}

test();



function doNothing() {};
console.log(doNothing() === undefined);