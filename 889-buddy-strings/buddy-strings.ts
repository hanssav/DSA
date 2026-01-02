function buddyStrings(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;

    // 2. Jika s dan goal sudah sama persis
    if (s === goal) {
        // Kita butuh minimal satu huruf yang kembar supaya bisa diswap tanpa mengubah teks
        const uniqueChars = new Set(s);
        return uniqueChars.size < s.length;
    }

    let diff: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    // Syaratnya: Harus ada TEPAT 2 posisi yang beda 
    // Dan karakter di posisi tersebut harus saling silang
    return diff.length === 2 && 
           s[diff[0]] === goal[diff[1]] && 
           s[diff[1]] === goal[diff[0]];
};