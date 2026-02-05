function trimMean(arr: number[]): number {
    arr.sort((a, b) => a - b); 
    const n = arr.length; 

    const removeCount = Math.floor(n * (5 / 100));

    const trimmedArr = arr.slice(removeCount, n - removeCount);

    const sum = trimmedArr.reduce((acc, curr) => acc + curr, 0); 

    return sum / trimmedArr.length;  
};