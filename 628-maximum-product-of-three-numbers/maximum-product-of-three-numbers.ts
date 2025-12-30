function maximumProduct(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    
    // Cek semua kemungkinan produk maksimum:
    // 1. Tiga angka terbesar
    const product1 = nums[n-1] * nums[n-2] * nums[n-3];
    
    // 2. Dua angka terkecil (negatif) × angka terbesar
    const product2 = nums[0] * nums[1] * nums[n-1];
    
    return Math.max(product1, product2);
}