function diagonalPrime(nums: number[][]): number {
    let maxPrime = 0; 
    const n = nums.length; 

    const isPrime = (num: number): boolean => {
        if(num <= 1) return false; 

        for(let i = 2; i * i <= num; i++){
            if(num % i === 0) return false;
        }

        return true; 
    }

    for(let i = 0; i < n; i++){
        const val1 = nums[i][i]

        if(isPrime(val1)){
            maxPrime = Math.max(maxPrime, val1);
        }

        const val2 = nums[i][n - 1 - i];

        if(isPrime(val2)){
            maxPrime = Math.max(maxPrime, val2);
        }
    }

    return maxPrime
};