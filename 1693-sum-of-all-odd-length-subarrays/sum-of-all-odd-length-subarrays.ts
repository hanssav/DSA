function sumOddLengthSubarrays(arr: number[]): number {
    const n: number = arr.length;

    const prefix = new Array(n + 1).fill(0);
    for(let i = 0; i < n; i++){
        prefix[i + 1] = prefix[i] + arr[i];
    }

    let total = 0;

    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            const length: number = end - start + 1;
            
            // Check if the length of the current subarray is odd
            if (length % 2 === 1) {
                // Sum of subarray [start...end] is prefix[end + 1] - prefix[start]
                total += prefix[end + 1] - prefix[start];
            }
        }
    }
    
    return total;
};