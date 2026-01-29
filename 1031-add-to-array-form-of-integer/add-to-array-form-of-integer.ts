function addToArrayForm(num: number[], k: number): number[] {
    let i = num.length - 1;
    let result: number[] = [];
    let cur = k;

    // Selama masih ada angka di num, atau masih ada sisa di cur (k)
    while (i >= 0 || cur > 0) {
        if (i >= 0) {
            cur += num[i]; // Tambahkan angka dari array ke cur
        }
        
        // Ambil angka terakhir dari cur untuk disimpan di hasil
        result.push(cur % 10);
        
        // Pindahkan sisa (carry) ke depan untuk penjumlahan berikutnya
        cur = Math.floor(cur / 10);
        
        i--;
    }

    // Karena kita push dari belakang, balikkan array-nya
    return result.reverse();
}