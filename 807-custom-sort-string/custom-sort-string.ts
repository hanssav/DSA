function customSortString(order: string, s: string): string {
    const counts = new Map<string, number>(); 
    
    for(const str of s){
        counts.set(str, (counts.get(str) || 0) + 1); 
    }

    let res = ""; 

    for(const ord of order){
        if(!counts.get(ord)) continue;

        for(let i = 0; i < counts.get(ord); i++){
            res += ord;
        }

        counts.delete(ord);
    }; 

    if(counts.size < 1) return res;

    for(const [key, count] of counts){
        for(let i = 0; i < count; i++){
            res += key;
        }
    }
    
    return res;
};