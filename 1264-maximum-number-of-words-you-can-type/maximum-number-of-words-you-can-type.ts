function canBeTypedWords(text: string, brokenLetters: string): number {
    let arr = text.split(" ");

    let count = 0; 

    for(let i = 0; i < arr.length; i++){
        let isBroke = false;
        for(const b of brokenLetters){
            if(arr[i].includes(b)) {
                isBroke = true;
            }
        }
        if(!isBroke) count++;
    };

    return count;
};