const fibonacci = function(amount) {
    let amountUser;
    let fib = [0,1];
    //als parameter string is => omzetten naar een getal
    if(!Number.isInteger(amount)) {
        amountUser = Number.parseInt(amount);    
    }
    else {
        amountUser = amount;
    }

    //controleren of getal positief is
    if(amount < 0) {
        return "OOPS";
    }
    else if(amount == 0) {
        return 0;
    }

    for (let i = 2; i <= amountUser; i++){
        fib[i] = fib[i - 1] + fib[i-2];
    }
    console.log(fib[amountUser]);
    return fib[amountUser];

};

fibonacci("10");

// Do not edit below this line
module.exports = fibonacci;
