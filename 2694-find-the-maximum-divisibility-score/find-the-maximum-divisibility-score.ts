function maxDivScore(nums: number[], divisors: number[]): number {
    const m = new Map<number, number>();
    let maxScore = -1;
    let result = Infinity; // Ganti dari val ke result dengan inisialisasi Infinity
    
    for(const dv of divisors) {
        let score = 0;
        
        // Hitung score untuk divisor ini
        for(const num of nums) {
            if(num % dv === 0) {
                score++;
            }
        }
        
        m.set(dv, score); // Simpan ke Map jika perlu
        
        // Update result
        if(score > maxScore) {
            maxScore = score;
            result = dv;
        } else if(score === maxScore && dv < result) {
            result = dv;
        }
        
        // console.log(`divisor=${dv}, score=${score}, maxScore=${maxScore}, result=${result}`);
    }
    
    return result;
}