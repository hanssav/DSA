function calculateTax(brackets: number[][], income: number): number {
    let tax = 0;
    let prev = 0; // batas bawah bracket sebelumnya
    
    for (const [upper, percent] of brackets) {
        if (income <= 0) break;
        
        // Hitung berapa banyak income yang kena bracket ini
        const taxable = Math.min(income, upper - prev);
        tax += taxable * (percent / 100);
        
        // Kurangi income yang sudah diproses
        income -= taxable;
        prev = upper;
    }
    
    return tax;
};