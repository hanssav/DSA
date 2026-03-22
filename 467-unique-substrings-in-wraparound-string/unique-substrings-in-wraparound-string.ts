function findSubstringInWraproundString(s: string): number {
    if (!s) return 0;
    
    // dp[i] = longest contiguous substring ending with character i (0-25)
    const dp: number[] = new Array(26).fill(0);
    let maxLen = 1;
    
    // Initialize first character
    dp[s.charCodeAt(0) - 97] = 1;
    
    for (let i = 1; i < s.length; i++) {
        const curr = s.charCodeAt(i) - 97;
        const prev = s.charCodeAt(i - 1) - 97;
        
        // Check if s[i] follows s[i-1] in wraparound string
        if (prev === 25 && curr === 0 || prev + 1 === curr) {
            maxLen++;
        } else {
            maxLen = 1;
        }
        
        dp[curr] = Math.max(dp[curr], maxLen);
    }
    
    // Sum up all maximum lengths
    return dp.reduce((sum, val) => sum + val, 0);
}