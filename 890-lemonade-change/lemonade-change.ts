function lemonadeChange(bills: number[]): boolean {
    let five = 0;
    let ten = 0;

    for (let bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            // Harus kembali $5
            if (five === 0) return false;
            five--;
            ten++;
        } else { // Pelanggan bayar $20
            // Prioritas: Kasih kembalian $10 + $5 dulu
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                // Alternatif: Kasih tiga lembar $5
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}