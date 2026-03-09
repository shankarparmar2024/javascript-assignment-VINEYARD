function uniqueElements(arr1, arr2){

    // Combine both arrays
    let combined = arr1.concat(arr2);

    let result = [];

    // Loop through combined array
    for(let i = 0; i < combined.length; i++){

        // Check if element already exists in result
        if(!result.includes(combined[i])){
            result.push(combined[i]); // add element
        }
    }

    return result;
}

// Example arrays
let array1 = [1,2,3,4];
let array2 = [3,4,5,6];

// Call function
console.log("Unique Elements:", uniqueElements(array1, array2));