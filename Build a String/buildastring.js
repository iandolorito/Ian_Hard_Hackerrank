function maxSub(s, r, m) {
    let i = m;
    while (i <= r.length) {
        if (s.indexOf(r.substr(0, i)) == -1)
            return i - 1;
        i++;
    }
    return i - 1;
}
function buildString(a, b, s) {
    /*
     * Write your code here.
     */
    let cost = [],
        s1 = s.split(''),
        state = [],
        max = 0;
    cost[s.length - 1] = 0;
    s1.map((x, i) => {
        let sub = s.substr(0, i + 1),
            rem = s.substr(i + 1);
        max = maxSub(sub, rem, max);
        state[i] = max;

})
for (let i = s.length - 2; i >= 0; i--) {
    let min = a + cost[i + 1];
    for (let j = 1; j <= state[i]; j++) {
        let c = b + cost[i + j];
        min = Math.min(min, c);
    }
    cost[i] = min;
}
return cost[0] + a;
}