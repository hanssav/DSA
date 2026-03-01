function maximumPopulation(logs: number[][]): number {
    let counts = new Map<number, number>(); 
    let maxYear = logs[0][0]; // inisialisasi dengan tahun pertama
    
    for(const [start, end] of logs){
        // Seseorang hidup dari start hingga end-1
        for(let i = start; i < end; i++){
            counts.set(i, (counts.get(i) || 0) + 1); 
            
            const currentCount = counts.get(i) || 0;
            const maxCount = counts.get(maxYear) || 0;
            
            // Update maxYear jika:
            // 1. currentCount > maxCount, atau
            // 2. currentCount == maxCount dan i < maxYear (tahun lebih kecil)
            if (currentCount > maxCount || 
                (currentCount === maxCount && i < maxYear)) {
                maxYear = i;
            }
        }
    }
    
    return maxYear;
};