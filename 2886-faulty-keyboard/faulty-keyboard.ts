function finalString(s: string): string {
    let res = []

    for(const str of s){
        if(str === "i") res.reverse();
        else res.push(str)
    }

    return res.join("");
};