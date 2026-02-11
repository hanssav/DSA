function isPalindromic(str: string): boolean {
    let left = 0; 
    let right = str.length - 1; 

    while (right > left){
        if(str[left] !== str[right]) return false;
    
        left++; 
        right--;
    }

    return true;
}


function firstPalindrome(words: string[]): string {
    for(let word of words){
        if(isPalindromic(word)) return word
    }

    return ""
};