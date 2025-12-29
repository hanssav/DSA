function findRestaurant(list1: string[], list2: string[]): string[] {
    const m = new Map(); 

    let res: string[] = []; 
    const len1 = list1.length; 
    const len2 = list2.length; 

    let min_sum = Infinity; 

    for(let i = 0; i < len1; i++){
        m.set(list1[i], i); 
    }

    for(let j = 0; j < len2; j++){
        const str2 = list2[j]; 

        if(m.has(str2)){
            const i = m.get(str2)!;
            const current_sum = i + j; 

            if(min_sum > current_sum){
                min_sum = current_sum
                res = [str2]; 
            } else if (current_sum === min_sum){
                res.push(str2)
            }
        }
    }

    return res; 
};