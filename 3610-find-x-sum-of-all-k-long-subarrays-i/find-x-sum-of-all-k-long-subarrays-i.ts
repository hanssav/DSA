function findXSum(nums: number[], k: number, x: number): number[] {
    const n = nums.length;
    const result: number[] = [];
    const counts = new Map<number, number>();

    // 1. Inisialisasi jendela pertama (0 sampai k-1)
    for (let i = 0; i < k; i++) {
        counts.set(nums[i], (counts.get(nums[i]) || 0) + 1);
    }

    // Fungsi pembantu untuk menghitung x-sum dari Map frekuensi saat ini
    const calculateXSum = (): number => {
        // Ubah Map ke Array: [[angka, frekuensi], [angka, frekuensi]]
        let freqArray = Array.from(counts.entries());

        // Sortir: 
        // 1. Frekuensi lebih besar di depan (b[1] - a[1])
        // 2. Jika frekuensi sama, nilai angka lebih besar di depan (b[0] - a[0])
        freqArray.sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1];
            return b[0] - a[0];
        });

        // Ambil top X
        const topX = freqArray.slice(0, x);
        
        // Hitung total (angka * frekuensi)
        return topX.reduce((acc, [val, freq]) => acc + (val * freq), 0);
    };

    // Masukkan hasil jendela pertama
    result.push(calculateXSum());

    // 2. Geser jendela dari indeks 1 sampai n-k
    for (let i = 1; i <= n - k; i++) {
        const prevElement = nums[i - 1];    // Elemen yang keluar dari kiri
        const nextElement = nums[i + k - 1]; // Elemen yang masuk dari kanan

        // Kurangi frekuensi elemen yang keluar
        const prevCount = counts.get(prevElement)!;
        if (prevCount === 1) {
            counts.delete(prevElement);
        } else {
            counts.set(prevElement, prevCount - 1);
        }

        // Tambah frekuensi elemen yang masuk
        counts.set(nextElement, (counts.get(nextElement) || 0) + 1);

        // Hitung ulang x-sum untuk jendela baru
        result.push(calculateXSum());
    }

    return result;
}