function replaceElements(arr: number[]): number[] {
    let max = -1;
    
    // Iterasi dari kanan ke kiri
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];  // Simpan nilai asli
        arr[i] = max;           // Ganti dengan max sebelah kanan
        max = Math.max(max, current); // Update max
    }
    
    return arr;
}