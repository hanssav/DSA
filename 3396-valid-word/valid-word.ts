function isValid(word: string): boolean {
    const n = word.length; 

    if(n < 3) return false; 

    const vowel = new Set(['a', 'e', 'i', 'o', 'u']); 

    const regex = /^[a-z0-9]+$/i;
    if (!regex.test(word)) return false;

    let hasVowel = false; 
    let hasConsonant = false; 

    for(const ch of word.toLowerCase()){
        if (/[0-9]/.test(ch)) continue;

        if(vowel.has(ch)) hasVowel = true; 
        else hasConsonant = true
    }

    return hasVowel && hasConsonant
};