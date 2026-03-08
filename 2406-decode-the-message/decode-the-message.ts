function decodeMessage(key: string, message: string): string {
    const m = new Map<string, string>(); 
    const s = new Set<string>()

    let count = 0; 
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < key.length; i++){
        if(!s.has(key[i]) && key[i] !== " "){
            s.add(key[i]); 
            m.set(key[i], alphabet[count])
            count++;
        }
    }

    let res = ""

    for(const str of message){
        if(str !== " "){
            res += m.get(str)
        } else {
            res += " "; 
        }
    }

    return res
};