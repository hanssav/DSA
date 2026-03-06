function clearDigits(s: string): string {
    let st = []; 

    for(const ch of s){
        if(/[0-9]/.test(ch)){
            st.pop();
        } else {
            st.push(ch);
        }
    }

    return st.join("")
};