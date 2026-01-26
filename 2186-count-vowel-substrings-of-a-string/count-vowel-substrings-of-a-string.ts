function countVowelSubstrings(word: string): number {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        const currentVowels = new Set<string>();
        
        for (let j = i; j < word.length; j++) {
            // Jika bukan vokal, hentikan pencarian dari titik i ini
            if (!vowels.has(word[j])) {
                break;
            }

            // Jika vokal, masukkan ke set penampung unik
            currentVowels.add(word[j]);

            // Cek apakah sudah mengandung semua (5) vokal unik
            if (currentVowels.size === 5) {
                count++;
            }
        }
    }

    return count;
}