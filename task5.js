/*Просте число – це натуральне число, яке має два дільники (1 і саме число). Напишіть код, 
який виводить всі прості числа в діапазоні від 2 до n. Для n = 10 результат повинен бути 2, 3, 5, 7. 
Для вирішення задачі використати вкладені цикли.
*/


function showSimpleDigits(maxnumber) {
    for (let i=2; i<maxnumber; i++) {
        let issimple = true;
        if (i === 2) {
            issimple = true;
            console.log('simple ' + i);
            continue
        }
        //333---> 3/3
        for (let j=2; j<i; j++) {
            if (i%j == 0) {
                issimple=false;
                break
            }
        }
        if (issimple==true) {
            console.log(i)
        }
    }

}

showSimpleDigits(10)




/*
function isSimpleDigit(number) {
    if (number === 2) {
        return true

    }

    //333---> 3/3
    for (let i=2; i<number; i++) {
        if (number%i == 0) {
            return false
        }
    }
    return true
}

function showSimpleDigits(maxnumber) {
    for (let i=2; i<maxnumber; i++) {
        let issimple = isSimpleDigit(i);
        if (issimple==true) {
            console.log(i)
        }
    }

}

showSimpleDigits(10)
*/