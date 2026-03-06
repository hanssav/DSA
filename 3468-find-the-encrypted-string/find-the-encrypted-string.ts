function getEncryptedString(s: string, k: number): string {
    let ch = "" 
    const n = s.length
    for(let i = 0; i < n; i++){
        const ench = s[(i + k) % n];

        ch += ench; 
    }

    return ch
};