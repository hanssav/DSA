function reformat(s: string): string {
    const letters = []; 
    const digits = []; 

    for(let char of s){
        if(char >= "0" && char <= "9") digits.push(char)
        else letters.push(char) 
    }

    const l_len = letters.length; 
    const d_len = digits.length; 

    const res = []; 

    // console.log(letters, digits)

    const render_res = (first, second, f_len) => {
        // console.log(first, second, f_len, 'first')
        for(let i = 0; i < f_len; i++){
            res.push(first[i])
            if(!!second[i]) res.push(second[i])
            // console.log(res, 'res')
        }
    }

    if(Math.abs(l_len - d_len) > 1) return "";
    // else if(l_len > d_len) render_res(letters, digits, l_len)
    else if(d_len > l_len) render_res(digits, letters, d_len)
    else render_res(letters, digits, l_len)

    return res.join("")
};