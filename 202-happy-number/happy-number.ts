function isHappy(n: number): boolean {
    // 1. Gunakan Set untuk mencatat angka yang sudah pernah muncul
    const seen = new Set<number>();

    // 2. Loop terus selama n bukan 1 dan n belum pernah muncul sebelumnya
    while (n !== 1 && !seen.has(n)) {
        seen.add(n); // Catat angka saat ini agar kita tahu jika dia muncul lagi
        
        let sum = 0;
        let digits = n.toString().split(""); 

        // 3. Hitung jumlah kuadrat dari setiap digit
        for (let i = 0; i < digits.length; i++) {
            sum += Math.pow(parseInt(digits[i]), 2);
        }

        // 4. Update n dengan hasil penjumlahan tadi untuk dicek di iterasi berikutnya
        n = sum;
    }

    // 5. Jika loop berhenti karena n adalah 1, berarti Happy!
    // Jika loop berhenti karena n sudah ada di Set, berarti False.
    return n === 1;
}