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

function getLetter(s) {
    let letter;
    // Write your code here
    const character = s.charAt(0);
    switch(true) {
        case 'aeiou'.includes(character):
            letter = 'A';
            break;
        case 'bcdfg'.includes(character): 
            letter = 'B';   
            break;
        case 'hjlkm'.includes(character): 
            letter = 'C';
             break;
        case 'npqrstuvwxyz'.includes(character): 
            letter = 'D';
            break;
    }

    return letter;
}
