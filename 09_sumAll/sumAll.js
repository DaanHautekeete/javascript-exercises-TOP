const sumAll = function(min, max) {
    let sum = 0;

    //foutopvang
    if(!Number.isInteger(min) || !Number.isInteger(max) ) {
        return "ERROR";
    }

    if(min < 0 || max < 0) {
        return "ERROR";
    }

    if(min > max) {
        const temp = min;
        min = max;
        max = temp;
        
    }

    //loop maken tussen de getallen
    for(let i = min; i <= max; i++) {
        sum = sum + i;
        console.log(sum);
    }


    return sum;

};

sumAll(123,1);

// Do not edit below this line
module.exports = sumAll;
