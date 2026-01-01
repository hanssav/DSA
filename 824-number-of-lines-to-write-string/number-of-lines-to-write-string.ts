function numberOfLines(widths: number[], s: string): number[] { 
    let lines = 1; 
    let curr_widths = 0; 

    for(let i = 0; i < s.length; i++){
        let word = s[i]; 
        //find index use ASCII, a = 97, b = 98, c = 99 (a=0, b=1, c=2...)
        let idx = word.charCodeAt(0) - 97; 

        curr_widths += widths[idx]; 
        
        if(!!s[i + 1] && curr_widths + widths[s[i + 1].charCodeAt(0) - 97] > 100){
            lines++
            curr_widths = 0
        }
    }
    return [lines, curr_widths]
};