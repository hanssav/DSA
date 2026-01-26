function maxPower(s: string): number {
    if(s.length === 1) return 1;
    let res = 0; 
    let count = 0; 

    let curr = "";

    for(let i = 0; i < s.length; i++){
        
        if(curr !== s[i]){
            count = 0;
            curr = s[i];
        } 

        count++;
        if(count > res) res = count;
    }  

    return res;
};