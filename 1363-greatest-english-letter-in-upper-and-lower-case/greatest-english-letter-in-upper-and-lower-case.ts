function greatestLetter(s: string): string {
    let res = ""; 

    const st = new Set(); 

    for(let i = 0; i < s.length; i++){
        let char = s[i]; 

        st.add(char)
        const isMatch = st.has(char.toUpperCase()) && st.has(char.toLowerCase());

        if(isMatch && char.toUpperCase() > res){
            res = char.toUpperCase();
        }
    };

    return res;
};