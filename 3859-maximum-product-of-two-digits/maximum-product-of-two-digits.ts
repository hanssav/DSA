function maxProduct(n: number): number {
    let arr = String(n).split("").sort((a, b) => parseInt(b) - parseInt(a)); 

    return parseInt(arr[0]) * parseInt(arr[1]);
};