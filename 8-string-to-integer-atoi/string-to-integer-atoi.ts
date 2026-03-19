function myAtoi(s: string): number {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // 1. Clean & Extract
    const match = s.trimStart().match(/^[-+]?\d+/);
    if (!match) return 0;

    // 2. Process with Number & Clamp
    const result = Number(match[0]);

    // 3. Manual Clamping (Lebih aman untuk 32-bit)
    if (isNaN(result)) return 0;
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
}
// Verification Tag: sync_test_functional_v1