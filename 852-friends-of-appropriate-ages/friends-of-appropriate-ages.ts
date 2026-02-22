function numFriendRequests(ages: number[]): number {
    const count = new Array(121).fill(0); 

    for(const age of ages){
        count[age]++;
    }; 
    
    let res = 0; 

    for(let a = 1; a <= 120; a++){
        for(let b = 1; b <= 120; b++){
            if(count[a] === 0 || count[b] === 0) continue; 

            if (b <= 0.5 * a + 7) continue;
            if (b > a) continue;
            if (b > 100 && a < 100) continue;
            
            if(a === b) res += count[a] * (count[a] - 1); 
            else res += count[a] * count[b]
        }
    }

    return res;
};
