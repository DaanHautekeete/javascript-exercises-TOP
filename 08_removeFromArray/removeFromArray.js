const removeFromArray = function(arr, itemToRemove) {
    //index ophalen van item
    let index = arr.indexOf(itemToRemove);
    console.log(index);

    arr.splice(index, 1);

    console.log(arr);
    return arr;

};

let array = [1, 2, 3, 4]
removeFromArray(array, 3);


// Do not edit below this line
module.exports = removeFromArray;
