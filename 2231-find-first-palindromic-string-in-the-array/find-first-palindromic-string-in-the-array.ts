function isPalindromic(str: string): boolean {
    const reversedStr = str.split("").reverse().join(""); 
    return str === reversedStr;
}


function firstPalindrome(words: string[]): string {
    for(let word of words){
        if(isPalindromic(word)) return word
    }

    return ""
};