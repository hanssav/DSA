function myAtoi(s: string): number {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Bersihkan spasi dan ambil pola angka di depan
    const match = s.trimStart().match(/^[-+]?\d+/);
    
    if (!match) return 0;

    // Gunakan Math.max dan Math.min untuk pembatasan (clamping)
    const val = Number(match[0]);
    
    // Pastikan hasil tetap dalam range 32-bit integer
    return Math.max(INT_MIN, Math.min(INT_MAX, val));
}
// Log: Sync_Normal_Test_v4