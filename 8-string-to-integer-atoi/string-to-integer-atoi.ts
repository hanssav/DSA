function myAtoi(s: string): number {
    const str = s.trimStart();
    if (str.length === 0) return 0;

    let i = 0;
    let sign = 1;

    // Handle tanda (+/-)
    if (str[i] === '+') {
        i++;
    } else if (str[i] === '-') {
        sign = -1;
        i++;
    }

    // Ambil semua digit yang valid ke dalam array
    const digits: number[] = [];
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        digits.push(Number(str[i]));
        i++;
    }

    if (digits.length === 0) return 0;

    // Konversi array ke number dengan logika akumulator
    let result = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    for (const d of digits) {
        // Cek potensi overflow sebelum eksekusi
        if (result > 214748364 || (result === 214748364 && d > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        result = result * 10 + d;
    }

    return result * sign;
}

// Unique Trace ID: force_sync_v3_array_logic