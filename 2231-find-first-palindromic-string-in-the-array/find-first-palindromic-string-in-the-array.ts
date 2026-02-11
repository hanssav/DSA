function firstPalindrome(words: string[]): string {

    function isPalindromic(str: string): boolean {
        // Normalize string: convert to lower case and remove non-alphanumeric characters
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

        const reversedStr = cleanStr.split("").reverse().join(""); 

        return cleanStr === reversedStr;
    }

    for(let word of words){
        if(isPalindromic(word)) return word
    }

    return ""
};