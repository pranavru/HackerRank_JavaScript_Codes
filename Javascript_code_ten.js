'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
        let temp = nums[0];
        let sndLargest = temp;
        let i = 0;
    for(i = 0; i< nums.length; i++) {
        if(temp < nums[i]) {
            sndLargest = temp
            temp = nums[i];
        } else if(sndLargest < nums[i] && temp !== nums[i]) {
            sndLargest = nums[i];
        }
    }
    return sndLargest;
}

