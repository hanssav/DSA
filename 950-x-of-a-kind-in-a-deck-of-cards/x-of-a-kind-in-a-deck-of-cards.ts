function hasGroupsSizeX(deck: number[]): boolean {
    const counts = new Map<number, number>();
    
    // 1. Hitung frekuensi tiap kartu
    for(const card of deck){
        counts.set(card, (counts.get(card) || 0) + 1); 
    }

    // 2. Ambil semua nilai frekuensi ke dalam array
    const frequencies = Array.from(counts.values()); 

    console.log(counts, frequencies);

    // 3. Fungsi Rumus FPB (GCD) dengan Algoritma Euclidean
    const gcd = (a: number, b: number): number => {
        while(b > 0){
            a %= b; 
            [a, b] = [b, a]; 
        }
        return a;
    }

    // 4. Cari FPB dari seluruh list secara estafet
    let resultGCD = frequencies[0];
    for(let i = 1; i < frequencies.length; i++){
        resultGCD = gcd(resultGCD, frequencies[i]); 

        if(resultGCD === 1) break;
    }

    return resultGCD >= 2 
};