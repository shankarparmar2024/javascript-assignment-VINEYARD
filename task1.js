// Given array
let numbers = [23, 45, 67, 89, 12, 90, 44];

// Assume first two numbers as largest and second largest
let largest = numbers[0];
let secondLargest = numbers[0];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {

    // If number is greater than largest
    if (numbers[i] > largest) {
        secondLargest = largest; // old largest becomes second largest
        largest = numbers[i]; // update largest
    }

    // If number is smaller than largest but greater than secondLargest
    else if (numbers[i] > secondLargest && numbers[i] != largest) {
        secondLargest = numbers[i];
    }
}

// Print result
console.log("Second Largest Number is:", secondLargest);