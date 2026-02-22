function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    let res: number[] = [];     

    potions.sort((a, b) => a - b);

    /*
        1spell × potion ≥ success >> potions >= success / spell;
    */

    const n = potions.length; 

    for(const spell of spells){
                
        let left = 0;
        let right = n - 1;
        let firstValidIndex = n; 

        while(left <= right){
            const mid = Math.floor((left + right) / 2); 

            if(spell * potions[mid] >= success){
                firstValidIndex = mid; 
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const count = n - firstValidIndex;
        res.push(count);
    }

    return res;
};