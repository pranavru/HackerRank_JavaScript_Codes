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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = [];
    var consonants= [];
    var j = 0;
    var k = 0;
    for(var i = 0; i < s.length; i++) {    
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            vowels[j] = s[i];
            j++;
        } else {
            if(s[i] != " ") {
                consonants[k] = s[i];
                k++;
            }
        }
    }
    for(var l = 0; l < vowels.length; l++) {
        console.log(vowels[l]);
    }
    for(var z = 0; z < consonants.length; z++) {
        console.log(consonants[z]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}