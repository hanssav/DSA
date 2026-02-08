function countPrimes(n: number): number {
    if (n <= 2) return 0;

    // Gunakan Uint8Array untuk efisiensi memori (1 = prima, 0 = bukan)
    const isPrime = new Uint8Array(n).fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;

    const limit = Math.sqrt(n);

    for (let i = 2; i <= limit; i++) {
        if (isPrime[i] === 1) {
            // Optimasi: mulai mencoret dari i * i
            // Kelipatan di bawah i * i pasti sudah dicoret oleh angka sebelumnya
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    // Hitung sisa angka yang masih tertanda 1
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i] === 1) count++;
    }

    return count;
}