function replaceDigits(s: string): string {
    const find = (s: string, num: number): string => {
        let ascii_val = s.charCodeAt(0); 

        let new_ascii_val = ascii_val + num; 
        return String.fromCharCode(new_ascii_val)
    }

    const words = s.split(""); 

    for(let i = 1; i < words.length; i += 2){
        // console.log(words[i])
        words[i] = find(words[i - 1], Number(words[i]))
    }

    return words.join("")
};