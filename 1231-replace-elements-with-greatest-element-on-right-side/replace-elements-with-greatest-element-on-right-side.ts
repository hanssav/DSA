function replaceElements(arr: number[]): number[] {
    const n = arr.length;
    const result = new Array(n);
    let max = -1;
    
    for (let i = n - 1; i >= 0; i--) {
        result[i] = max;
        max = Math.max(max, arr[i]);
    }
    
    return result;
}