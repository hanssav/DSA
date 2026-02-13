function sumOfEncryptedInt(nums: number[]): number {
    let sum = 0;

    for (let num of nums) {
        let temp = num;
        let maxDigit = 0;
        let digitCount = 0;

        // Cari max digit & hitung panjang digit
        while (temp > 0) {
            const digit = temp % 10;
            maxDigit = Math.max(maxDigit, digit);
            temp = Math.floor(temp / 10);
            digitCount++;
        }

        // Bangun angka encrypted
        let encrypted = 0;
        for (let i = 0; i < digitCount; i++) {
            encrypted = encrypted * 10 + maxDigit;
        }

        sum += encrypted;
    }

    return sum;
}
