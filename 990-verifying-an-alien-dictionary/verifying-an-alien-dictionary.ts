function isAlienSorted(words: string[], order: string): boolean {
    const orders = new Map(); 

    for(let i = 0; i < order.length; i++){
        orders.set(order[i], i);
    }

    for(let i = 1; i < words.length; i++){
        const curr = words[i]; 
        const prev = words[i - 1]; 

        let diff = false; 
        const n = Math.min(curr.length, prev.length)

        for(let j = 0; j < n; j++){
            if(prev[j] !== curr[j]){
                const s1 = orders.get(prev[j])
                const s2 = orders.get(curr[j])

                // console.log(s1, s2, prev[j], curr[j])
                if(s1 > s2) return false; 

                diff = true;
                break;
            }
        }

        if(!diff && prev.length > curr.length) return false;
    }

    return true;
};