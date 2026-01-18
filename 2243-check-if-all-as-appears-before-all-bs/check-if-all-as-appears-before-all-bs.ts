function checkString(s: string): boolean {
    let b_show = false; 

    for(const a of s){
        if(a === "b") b_show = true; 

        else if(b_show && a === "a") return false
    }

    return true;
};