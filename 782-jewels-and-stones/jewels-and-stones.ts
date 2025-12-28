function numJewelsInStones(jewels: string, stones: string): number {
    let res = 0;    
    const s = new Set(jewels);

    for(let stone of stones){
        if(s.has(stone)) res++
    }
    return res
};