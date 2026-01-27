function countValidWords(sentence: string): number {
    // 1. Gunakan regex untuk split agar spasi berlebih tidak jadi masalah
    const words = sentence.trim().split(/\s+/);
    let count = 0;

    for (const w of words) {
        if (w === "") continue;

        let isValid = true;
        let hyphenCount = 0;

        for (let i = 0; i < w.length; i++) {
            const char = w[i];

            // Aturan 1: Tidak boleh ada angka
            if (/\d/.test(char)) {
                isValid = false;
                break;
            }

            // Aturan 2: Tanda hubung '-'
            if (char === "-") {
                hyphenCount++;
                // Harus diapit huruf (bukan di awal/akhir) dan hanya boleh satu
                if (
                    hyphenCount > 1 || 
                    i === 0 || 
                    i === w.length - 1 || 
                    !/[a-z]/.test(w[i - 1]) || 
                    !/[a-z]/.test(w[i + 1])
                ) {
                    isValid = false;
                    break;
                }
            }

            // Aturan 3: Tanda baca (! , .)
            if (/[!.,]/.test(char)) {
                // Hanya boleh ada di akhir kata
                if (i !== w.length - 1) {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid) count++;
    }

    return count;
}