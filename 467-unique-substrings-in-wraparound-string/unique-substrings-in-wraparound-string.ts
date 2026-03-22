// function findSubstringInWraproundString(s: string): number {
//     if (!s) return 0;
    
//     // dp[i] = longest contiguous substring ending with character i (0-25)
//     const dp: number[] = new Array(26).fill(0);
//     let maxLen = 1;
    
//     // Initialize first character
//     dp[s.charCodeAt(0) - 97] = 1;
    
//     for (let i = 1; i < s.length; i++) {
//         const curr = s.charCodeAt(i) - 97;
//         const prev = s.charCodeAt(i - 1) - 97;
        
//         // Check if s[i] follows s[i-1] in wraparound string
//         if (prev === 25 && curr === 0 || prev + 1 === curr) {
//             maxLen++;
//         } else {
//             maxLen = 1;
//         }
        
//         dp[curr] = Math.max(dp[curr], maxLen);
//     }
    
//     // Sum up all maximum lengths
//     return dp.reduce((sum, val) => sum + val, 0);
// }

// function findSubstringInWraproundString(s: string): number {
//     if (!s) return 0;
    
//     const maxLenMap: Map<string, number> = new Map();
//     let maxLen = 1;
    
//     for (let i = 0; i < s.length; i++) {
//         if (i > 0 && isConsecutive(s[i - 1], s[i])) {
//             maxLen++;
//         } else {
//             maxLen = 1;
//         }
        
//         const currChar = s[i];
//         maxLenMap.set(currChar, Math.max(maxLenMap.get(currChar) || 0, maxLen));
//     }
    
//     // Sum up all values
//     let total = 0;
//     for (const value of maxLenMap.values()) {
//         total += value;
//     }
//     return total;
// }

// function isConsecutive(prev: string, curr: string): boolean {
//     const prevCode = prev.charCodeAt(0) - 97;
//     const currCode = curr.charCodeAt(0) - 97;
//     return (prevCode === 25 && currCode === 0) || prevCode + 1 === currCode;
// }

// function findSubstringInWraproundString(s: string): number {
//     if (!s) return 0;
    
//     const maxEndingHere: number[] = new Array(26).fill(0);
//     let currentStreak = 1;
    
//     for (let i = 0; i < s.length; i++) {
//         if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1 || 
//             (s[i - 1] === 'z' && s[i] === 'a'))) {
//             currentStreak++;
//         } else {
//             currentStreak = 1;
//         }
        
//         const index = s.charCodeAt(i) - 97;
//         maxEndingHere[index] = Math.max(maxEndingHere[index], currentStreak);
//     }
    
//     // Calculate total unique substrings
//     return maxEndingHere.reduce((sum, len) => sum + len, 0);
// }

// function findSubstringInWraproundString(s: string): number {
//     if (!s) return 0;
    
//     const maxLen: number[] = new Array(26).fill(0);
//     let windowStart = 0;
    
//     for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
//         // Check if current character breaks the consecutive sequence
//         if (windowEnd > 0 && !isWraparoundConsecutive(s[windowEnd - 1], s[windowEnd])) {
//             windowStart = windowEnd;
//         }
        
//         const len = windowEnd - windowStart + 1;
//         const charIndex = s.charCodeAt(windowEnd) - 97;
//         maxLen[charIndex] = Math.max(maxLen[charIndex], len);
//     }
    
//     return maxLen.reduce((sum, val) => sum + val, 0);
// }

// function isWraparoundConsecutive(prev: string, curr: string): boolean {
//     return (prev === 'z' && curr === 'a') || 
//            curr.charCodeAt(0) - prev.charCodeAt(0) === 1;
// }

function findSubstringInWraproundString(s: string): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    
    const maxLengths: number[] = new Array(26).fill(0);
    let currentLength = 1;
    
    // Process first character
    maxLengths[s.charCodeAt(0) - 97] = 1;
    
    for (let i = 1; i < s.length; i++) {
        const prevCode = s.charCodeAt(i - 1) - 97;
        const currCode = s.charCodeAt(i) - 97;
        
        // Check if characters are consecutive in wraparound string
        if ((prevCode === 25 && currCode === 0) || currCode === prevCode + 1) {
            currentLength++;
        } else {
            currentLength = 1;
        }
        
        // Update max length for current character
        if (currentLength > maxLengths[currCode]) {
            maxLengths[currCode] = currentLength;
        }
    }
    
    // Sum all maximum lengths (each represents unique substrings ending with that char)
    let total = 0;
    for (let i = 0; i < 26; i++) {
        total += maxLengths[i];
    }
    
    return total;
}