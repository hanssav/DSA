function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0; 
    let boxesLoaded = 0; 

    for(const [count, units] of boxTypes){
        const canTake = Math.min(count, truckSize - boxesLoaded); 

        totalUnits += canTake * units; 

        boxesLoaded += canTake;

        if(boxesLoaded === truckSize) break;
    }

    return totalUnits;
};