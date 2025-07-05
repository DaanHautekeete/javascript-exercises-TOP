const removeFromArray = function(arr, ...args) {
    //nieuwe array aanmaken
    let newArray = [];

    arr.forEach((item) => {
        //controleren of item in args niet in arr zit
        if(!args.includes(item)) {newArray.push(item);};
        console.log(newArray);
        
    });

    return newArray;

};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;