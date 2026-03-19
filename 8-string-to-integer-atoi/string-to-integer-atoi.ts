function myAtoi(s: string): number {
    const match = s.trimStart().match(/^[-+]?\d+/);
    if (!match) return 0;

    let num = BigInt(match[0]);
    const INT_MAX = BigInt(2147483647);
    const INT_MIN = BigInt(-2147483648);

    if (num > INT_MAX) return Number(INT_MAX);
    if (num < INT_MIN) return Number(INT_MIN);

    return Number(num);
}
// Trigger update: BigInt version