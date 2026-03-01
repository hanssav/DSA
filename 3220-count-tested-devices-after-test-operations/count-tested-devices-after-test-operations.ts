function countTestedDevices(batteryPercentages: number[]): number {
    let tested = 0; 
    const n = batteryPercentages.length;

    for(let i = 0; i < n; i++){
        if(batteryPercentages[i] > 0){
            tested++; 

            for(let j = i + 1; j < n; j++){
                batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
            }
        }
    }

    return tested;
};