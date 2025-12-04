function sortedSubsegments(k, a, queries) {

    for (let i = 0; i < queries.length; i++) {
        const l = queries[i][0]; 
        const r = queries[i][1]; 


        const subsegment = a.slice(l, r + 1);

        subsegment.sort((x, y) => x - y);
        a.splice(l, r - l + 1, ...subsegment);
    }
    return a[k];
}