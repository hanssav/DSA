function hasMatch(s: string, p: string): boolean {
    const parts = p.split("*");
    const prefix = parts[0];
    const suffix = parts[1];
    
    // Cari prefix di s
    for (let i = 0; i <= s.length; i++) {
        // Cek apakah prefix cocok di posisi i
        if (s.substring(i, i + prefix.length) === prefix) {
            // Setelah prefix, cari suffix di posisi manapun setelahnya
            for (let j = i + prefix.length; j <= s.length; j++) {
                if (s.substring(j, j + suffix.length) === suffix) {
                    return true;
                }
            }
        }
    }
    
    return false;
};