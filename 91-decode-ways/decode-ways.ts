function numDecodings(s: string): number {
    const memo = new Map<number, number>();

    function backtrack(index: number): number {
        // Jika sudah sampai ujung string, berarti satu cara decoding berhasil
        if (index === s.length) return 1;
        
        // Jika angka dimulai dengan '0', tidak bisa di-decode
        if (s[index] === '0') return 0;

        // Cek apakah hasil index ini sudah pernah dihitung
        if (memo.has(index)) return memo.get(index)!;

        // Opsi 1: Ambil 1 digit saja
        let res = backtrack(index + 1);

        // Opsi 2: Ambil 2 digit (jika memungkinkan)
        if (index + 1 < s.length) {
            const twoDigit = parseInt(s.substring(index, index + 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                res += backtrack(index + 2);
            }
        }

        memo.set(index, res);
        return res;
    }

    return backtrack(0);
}