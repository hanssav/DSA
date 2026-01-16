function reversePrefix(word: string, ch: string): string {
    let words = word.split("");

    let idx = 0; 

    for(let i = 0; i < word.length; i++){
        if(word[i] === ch) {
            idx = i
            break;
        } 
    }

    let reverse = words.splice(0, idx + 1).reverse()

    return [...reverse, ...words].join("") 
};