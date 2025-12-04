function sherlockAndMinimax(arr, p, q) {
    arr.sort((a, b) => a - b);

    let candidates = [p, q];

    for (let i = 0; i < arr.length - 1; i++) {
        let mid = Math.floor((arr[i] + arr[i + 1]) / 2);
        if (mid >= p && mid <= q) candidates.push(mid);
        if (mid + 1 >= p && mid + 1 <= q) candidates.push(mid + 1);
    }

    let bestM = p;
    let maxMinDist = -1;

    for (let m of candidates) {
        let minDist = Infinity;
        for (let num of arr) {
            minDist = Math.min(minDist, Math.abs(num - m));
        }
        if (minDist > maxMinDist || (minDist === maxMinDist && m < bestM)) {
            maxMinDist = minDist;
            bestM = m;
        }
    }

    return bestM;
}
