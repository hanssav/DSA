function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const res: number[][] = [];
    if (!nums1.length || !nums2.length || k === 0) return res;

    // "Queue" berisi: [totalSum, indexNums1, indexNums2]
    const queue: [number, number, number][] = [];

    // Inisialisasi: Masukkan pasangan awal (nums1[i], nums2[0])
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        queue.push([nums1[i] + nums2[0], i, 0]);
    }

    while (res.length < k && queue.length > 0) {
        // Ambil yang terkecil (elemen pertama)
        const [sum, i, j] = queue.shift()!;
        res.push([nums1[i], nums2[j]]);

        // Jika masih ada elemen di nums2, masukkan pasangan berikutnya
        if (j + 1 < nums2.length) {
            const nextSum = nums1[i] + nums2[j + 1];
            const nextPair: [number, number, number] = [nextSum, i, j + 1];
            
            // CARA MUDAH: Masukkan ke posisi yang tepat agar queue tetap terurut
            // Ini menggunakan teknik Binary Search sederhana (insertion sort style)
            let low = 0, high = queue.length;
            while (low < high) {
                let mid = (low + high) >>> 1;
                if (queue[mid][0] < nextSum) low = mid + 1;
                else high = mid;
            }
            queue.splice(low, 0, nextPair);
        }
    }

    return res;
}