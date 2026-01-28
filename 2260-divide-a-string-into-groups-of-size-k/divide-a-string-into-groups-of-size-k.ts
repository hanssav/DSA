function divideString(s: string, k: number, fill: string): string[] {
    let res = []; 

    for(let i = 0; i < s.length; i += k){
        let str = s.substring(i, i + k); 
        
        if(str.length < k){
            for(let j = str.length; j < k; j++){
                str += fill;
            }
        }

        res.push(str)
    }

    return res;
};