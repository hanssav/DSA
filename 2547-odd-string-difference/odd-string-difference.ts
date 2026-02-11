function oddString(words: string[]): string {
    // Fungsi pembantu untuk mendapatkan array selisih
    const getDiff = (word: string): string => {
        let diff = [];
        for (let i = 1; i < word.length; i++) {
            diff.push(word.charCodeAt(i) - word.charCodeAt(i - 1));
        }
        return diff.join(',');
    };

    // Kita cukup bandingkan pola kata pertama dan kedua
    const diff0 = getDiff(words[0]);
    const diff1 = getDiff(words[1]);

    if (diff0 !== diff1) {
        // Jika dua kata pertama beda, cek kata ketiga untuk tahu mana yang normal
        const diff2 = getDiff(words[2]);
        return diff2 === diff0 ? words[1] : words[0];
    }

    // Jika dua kata pertama sama, cari kata lain yang beda dari diff0
    for (let i = 2; i < words.length; i++) {
        if (getDiff(words[i]) !== diff0) {
            return words[i];
        }
    }

    return "";
}