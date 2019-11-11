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


function getMaxLessThanK(n, k) {
    
    var ans = 0;
    var ltk = 0;
    for(let i = n; i > 0; i--) {
        for(let j = n -1; j > 0; j--) {
            ans = i & j;

            if(ans > ltk && ans < k && i !== j) {
                ltk = ans;
            }
        }
    }

    return ltk;
}
