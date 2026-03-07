function isBalanced(num: string): boolean {
    let e = 0; 
    let o = 0; 

    for(let i = 0; i < num.length; i++){
        if(i % 2 === 0) e += parseInt(num[i]); 
        else o += parseInt(num[i]);
    }

    return e === o
};