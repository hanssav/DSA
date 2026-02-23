function findOriginalArray(changed: number[]): number[] {
    if (changed.length % 2 !== 0) return [];
    
    const counts = new Map<number, number>();
    for (const c of changed) {
        counts.set(c, (counts.get(c) || 0) + 1);
    }
    
    const unique = [...counts.keys()].sort((a, b) => a - b);
    const res: number[] = [];
    
    for (const num of unique) {
        if (counts.get(num) === 0) continue;
        
        const doubled = num * 2;
        const freqNum = counts.get(num) || 0;
        
        // Kasus khusus: num = 0
        if (num === 0) {
            // Frekuensi 0 harus genap
            if (freqNum % 2 !== 0) return [];
            // Hanya setengah dari 0 yang masuk original
            for (let i = 0; i < freqNum / 2; i++) {
                res.push(0);
            }
            counts.set(num, 0);
            continue;
        }
        
        const freqDouble = counts.get(doubled) || 0;
        if (freqDouble < freqNum) return [];
        
        counts.set(num, 0);
        counts.set(doubled, freqDouble - freqNum);
        
        for (let i = 0; i < freqNum; i++) {
            res.push(num);
        }
    }
    
    return res;
}