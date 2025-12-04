function boardCutting(cost_y, cost_x) {
    const MOD = 1_000_000_007;
    
    // Sort descending
    cost_y.sort((a, b) => b - a);
    cost_x.sort((a, b) => b - a);
    
    let h = 1;
    let v = 1;
    let i = 0, j = 0;
    let totalCost = 0n; 
    
    while (i < cost_y.length && j < cost_x.length) {
        if (cost_y[i] > cost_x[j]) {
            totalCost += BigInt(cost_y[i]) * BigInt(v);
            h++;
            i++;
        } else {
            totalCost += BigInt(cost_x[j]) * BigInt(h);
            v++;
            j++;
        }
    }
    

    while (i < cost_y.length) {
        totalCost += BigInt(cost_y[i]) * BigInt(v);
        i++;
        h++;
    }

    while (j < cost_x.length) {
        totalCost += BigInt(cost_x[j]) * BigInt(h);
        j++;
        v++;
    }
    
    return Number(totalCost % BigInt(MOD));
}
