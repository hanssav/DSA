function maxDivScore(nums: number[], divisors: number[]): number {
    let maxScore = -1;
    let result = Infinity;
    
    for (const divisor of divisors) {
        let score = 0;
        
        // Hitung berapa nums yang habis dibagi divisor
        for (const num of nums) {
            if (num % divisor === 0) {
                score++;
            }
        }
        
        // Update result jika score lebih tinggi, atau score sama tapi divisor lebih kecil
        if (score > maxScore || (score === maxScore && divisor < result)) {
            maxScore = score;
            result = divisor;
        }
    }
    
    return result;
}