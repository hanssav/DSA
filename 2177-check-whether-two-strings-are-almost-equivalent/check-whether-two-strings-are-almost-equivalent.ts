function checkAlmostEquivalent(word1: string, word2: string): boolean {
    // Helper untuk menghitung frekuensi
    function getCounts(word: string): number[] {
        const counts = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            counts[word.charCodeAt(i) - 97]++;
        }
        return counts;
    }

    const freq1 = getCounts(word1);
    const freq2 = getCounts(word2);

    // Cek selisih untuk setiap alfabet (indeks 0-25)
    for (let i = 0; i < 26; i++) {
        const diff = Math.abs(freq1[i] - freq2[i]);
        
        // Jika selisih satu huruf saja > 3, maka tidak almost equivalent
        if (diff > 3) {
            return false;
        }
    }

    return true;
};