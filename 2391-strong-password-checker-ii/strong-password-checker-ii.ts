function strongPasswordCheckerII(password: string): boolean {
    // 1. Syarat Panjang
    if (password.length < 8) return false;

    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let hasSpecial = false;
    const specialChars = "!@#$%^&*()-+";

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        // 2. Syarat Tidak Boleh Bersebelahan Sama
        if (i > 0 && char === password[i - 1]) return false;

        // 3. Cek Kategori Karakter
        if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

    // Semua flag harus bernilai true
    return hasLower && hasUpper && hasDigit && hasSpecial;
}