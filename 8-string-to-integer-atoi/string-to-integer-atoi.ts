function myAtoi(s: string): number {
    const val = parseInt(s);
    
    if (isNaN(val)) return 0;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    return val > INT_MAX ? INT_MAX : (val < INT_MIN ? INT_MIN : val);
}
// Sync-Test-ID: verify_identity_v5