function reverseVowels(s: string): string {
    const set = new Set(['a', 'e', 'i', 'o', 'u'])

    let right = s.length - 1; 
    let left = 0; 

    const res = s.split('')

    while(right > left){
        const left_val = res[left].toLowerCase(); 
        const right_val = res[right].toLowerCase(); 

        if(set.has(left_val) && set.has(right_val)){
            const temp = res[right]; 
            res[right] = res[left]; 
            res[left] = temp

            right--
            left++
        }

        if(!set.has(right_val)) right--
        if(!set.has(left_val)) left++
    }


    return res.join('')
};