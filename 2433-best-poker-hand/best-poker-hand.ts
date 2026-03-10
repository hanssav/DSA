function bestHand(ranks: number[], suits: string[]): string {
    if(new Set(suits).size === 1) return "Flush"; 

    const counts = new Map(); 

    let maxCount = 0; 

    for(const r of ranks){
        const newCount = (counts.get(r) || 0) + 1; 
        counts.set(r, newCount); 

        maxCount = Math.max(maxCount, newCount); 
    }

    if (maxCount >= 3) {
        return "Three of a Kind";
    } else if (maxCount === 2) {
        return "Pair";
    } else {
        return "High Card";
    }
};