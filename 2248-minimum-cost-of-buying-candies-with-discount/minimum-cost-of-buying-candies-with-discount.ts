function minimumCost(cost: number[]): number {
    cost.sort((a, b) => b - a);
    
    let countFree = 0;
    let countCost = 0;
    for(const c of cost){
        if(countFree === 2){
            countFree = 0; 
            continue;
        }

        countFree++; 
        countCost += c;
    }

    return countCost;
};