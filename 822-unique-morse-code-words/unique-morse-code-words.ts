function uniqueMorseRepresentations(words: string[]): number {
    const morseCode: string[] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    const s = new Set();

    for(const word of words){
        let morse = ""
        
        for(const w of word){
            morse += morseCode[w.charCodeAt(0) - 97]; 
        }

        s.add(morse);
    }

    return s.size;
};