const reverseString = function(string) {
    // String omzetten naar een array
    let array = string.split('');

    //array omdraaien
    array.reverse();

    //string maken van array
    let output = array.join('');


    console.log(output);

    return output;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
