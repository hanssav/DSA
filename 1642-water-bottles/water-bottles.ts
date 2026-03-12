function numWaterBottles(numBottles: number, numExchange: number): number {
    let totalDrunk = numBottles; 
    let empty = numBottles; 
    while(empty >= numExchange){
        const newFullBottles = Math.floor(empty / numExchange)

        const remainingEmpty = empty % numExchange;

        totalDrunk += newFullBottles;

        empty = newFullBottles + remainingEmpty;
    }

    return totalDrunk
};