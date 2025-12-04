'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'playingWithNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY queries
 */

function playingWithNumbers1(arr, queries) {
    let xx = 0;
    return queries.map(x => {
        xx += x;
        return arr.reduce((acc, n) => acc + Math.abs(n+xx), 0);
    });
}
function playingWithNumbers2(arr, queries) {
    let sum = 0;
    let other = new Map();
    arr.forEach(n => {
        if (n < -2000 || n > 2000) {
            sum += Math.abs(n);
        }
        else {
            other.set(n, (other.get(n) || 0) + 1);
        }
    });
    let xx = 0;
    return queries.map(x => {
        xx += x;
        return [...other].reduce((acc, [n, c]) => acc + Math.abs(n+xx)*c, sum);
    });
}
function playingWithNumbers3(arr, queries) {
    let sum = 0;
    let other = [];
    arr.forEach(n => {
        if (n < -2000 || n > 2000) {
            sum += Math.abs(n);
        }
        else {
            other[n+2000] = (other[n+2000] || 0) + 1;
        }
    });
    let xx = 0;
    return queries.map(x => {
        xx += x;
        return other.reduce((acc, c, n) => acc + Math.abs(n-2000+xx)*c, sum);
    });
}
function playingWithNumbers(arr, queries) {
    return playingWithNumbers3(...arguments);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const q = parseInt(readLine().trim(), 10);

    const queries = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));

    const result = playingWithNumbers(arr, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}