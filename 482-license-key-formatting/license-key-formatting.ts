function licenseKeyFormatting(s: string, k: number): string {
    const sp = s.split("-")

    let res = ""; 
    let text = sp.join('')

    let idx = 0; 
    const len = text.length

    while(idx < len){
        const part = (len - idx) % k; 

        const part_text = text.substring(idx, part === 0 ? k + idx : part + idx)
        const upper_text = part_text.toUpperCase(); 

        res += `${res.length > 0 ? "-" : ""}${upper_text}` 

        idx += part === 0 ? k : part;  
    }
    return res
};