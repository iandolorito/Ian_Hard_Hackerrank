function chiefHopper(arr) {
    let required = 0;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        required = Math.ceil((required + arr[i]) / 2);
    }
    
    return required;
}
