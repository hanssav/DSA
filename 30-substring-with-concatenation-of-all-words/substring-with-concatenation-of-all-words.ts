function findSubstring(s: string, words: string[]): number[] {
    const res: number[] = [];
    if (!s || words.length === 0) return res;

    const n = s.length;
    const wordCount = words.length;
    const wordLen = words[0].length;
    const totalLen = wordCount * wordLen;

    // Frekuensi kata yang dibutuhkan
    const wordMap = new Map<string, number>();
    for (const w of words) {
        wordMap.set(w, (wordMap.get(w) || 0) + 1);
    }

    // Kita hanya perlu menggeser offset dari 0 sampai wordLen - 1
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let currentMap = new Map<string, number>();
        let count = 0;

        while (right + wordLen <= n) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (wordMap.has(word)) {
                currentMap.set(word, (currentMap.get(word) || 0) + 1);
                count++;

                // Jika jumlah kata tertentu melebihi yang dibutuhkan, 
                // geser window kiri sampai valid kembali
                while ((currentMap.get(word) || 0) > (wordMap.get(word) || 0)) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentMap.set(leftWord, currentMap.get(leftWord)! - 1);
                    count--;
                    left += wordLen;
                }

                // Jika jumlah kata yang cocok sama dengan total kata di words
                if (count === wordCount) {
                    res.push(left);
                }
            } else {
                // Kata tidak ada dalam daftar, reset window
                currentMap.clear();
                count = 0;
                left = right;
            }
        }
    }

    return res;
}