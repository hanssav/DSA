function minimumAbsDifference(arr: number[]): number[][] {
    // 1. URUTKAN DULU!
    arr.sort((a, b) => a - b);
    
    // 2. Cari selisih minimum (hanya antara elemen berdekatan)
    let minDiff = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];  // Tidak perlu Math.abs karena sudah terurut
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    
    // 3. Kumpulkan pasangan yang selisihnya = minDiff
    const result: number[][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === minDiff) {
            result.push([arr[i], arr[i + 1]]);
        }
    }
    
    return result;
}