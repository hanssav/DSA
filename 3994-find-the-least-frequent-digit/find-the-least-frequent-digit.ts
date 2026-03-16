function getLeastFrequentDigit(n: number): number {
    const s = n.toString();
    const counts = new Int32Array(10); // Array untuk menyimpan frekuensi 0-9

    // 1. Hitung frekuensi
    for (let i = 0; i < s.length; i++) {
        counts[parseInt(s[i])]++;
    }

    let minDigit = -1;
    let minFreq = Infinity;

    // 2. Cari frekuensi terkecil
    for (let i = 0; i <= 9; i++) {
        const f = counts[i];
        
        // Hanya proses angka yang benar-benar muncul (frekuensi > 0)
        if (f > 0) {
            if (f < minFreq) {
                // Kasus 1: Ketemu frekuensi yang lebih kecil
                minFreq = f;
                minDigit = i;
            } else if (f === minFreq) {
                // Kasus 2: Frekuensi sama, ambil angka yang lebih kecil
                if (minDigit === -1 || i < minDigit) {
                    minDigit = i;
                }
            }
        }
    }

    return minDigit;
}