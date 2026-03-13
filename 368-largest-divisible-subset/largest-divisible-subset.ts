function largestDivisibleSubset(nums: number[]): number[] {
    const n = nums.length; 
    if(n === 0) return []; 
   
    nums.sort((a, b) => a - b);

    const dp = new Array(n).fill(1); 
    const parent = new Array(n).fill(-1); 

    let maxIdx = 0; 

    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1){
                dp[i] = dp[j] + 1; 
                parent[i] = j;
            }
        }

        if (dp[i] > dp[maxIdx]) {
            maxIdx = i;
        }
    }

    // Rekonstruksi subset menggunakan array parent
    const result: number[] = [];
    let curr = maxIdx;
    while (curr !== -1) {
        result.push(nums[curr]);
        curr = parent[curr]; // Mundur ke "orang tua" nya
    }

    return result; // Hasilnya akan terbalik, tapi soal membolehkan urutan apa pun
};