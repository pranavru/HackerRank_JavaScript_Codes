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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    var splited_string;
    var reversed_string;
    var result;
    try {
        splited_string = s.split("");
        reversed_string = splited_string.reverse();
        result = reversed_string.join("");
        console.log(result);
    } catch(exc) {
        console.log(exc.message);
        console.log(s);
    }
}