function largestGoodInteger(num: string): string {
    let idx = 0; 
    let l = ""

    while(idx < num.length){
        if(num[idx] === num[idx + 1] && num[idx + 1] === num[idx + 2]){
            if(l.length === 0 || num[idx] > l[0]){
                l = num[idx] + num[idx + 1] + num[idx + 1]; 
            }
            
            idx += 3;
            continue;
        };

        idx++;
    }

    return l;
};