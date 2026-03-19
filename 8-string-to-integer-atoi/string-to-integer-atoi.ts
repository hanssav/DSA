function myAtoi(s: string): number {
    let i = 0;
    let sign = 1;
    let res = 0;
    const n = s.length;

    // Konstanta 32-bit signed integer
    const INT_MAX = 2147483647;      // 2^31 - 1
    const INT_MIN = -2147483648;     // -2^31

    // 1. Abaikan leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Tentukan sign (tanda +/-)
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Konversi karakter angka
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s.charCodeAt(i) - 48; // Ambil nilai numerik (ASCII '0' = 48)

        // 4. Cek overflow sebelum menjumlahkan
        // Jika res sudah besar, atau res pas tapi digit berikutnya > 7 (untuk positif) / 8 (untuk negatif)
        if (res > Math.floor(INT_MAX / 10) || (res === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        res = res * 10 + digit;
        i++;
    }

    return res * sign;
}