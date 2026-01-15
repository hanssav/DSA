function isPrefixString(s: string, words: string[]): boolean {
    let temp = ""; 

    for(let word of words){
        temp += word;
        
        // console.log(temp, 'tem')
        if(!s.includes(temp)) return false;
        if(s === temp) return true;
    }

    return false
};