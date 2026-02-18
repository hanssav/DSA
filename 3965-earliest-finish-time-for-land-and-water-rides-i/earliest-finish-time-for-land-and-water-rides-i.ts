function earliestFinishTime(
    landStartTime: number[], 
    landDuration: number[], 
    waterStartTime: number[], 
    waterDuration: number[]
): number {
    let minFinish = Infinity;
    
    for(let i = 0; i < landStartTime.length; i++) {
        for(let j = 0; j < waterStartTime.length; j++) {
            // Land first, then water
            const finishLand = landStartTime[i] + landDuration[i];
            const startWater = Math.max(finishLand, waterStartTime[j]);
            const finishBoth1 = startWater + waterDuration[j];
            
            // Water first, then land
            const finishWater = waterStartTime[j] + waterDuration[j];
            const startLand = Math.max(finishWater, landStartTime[i]);
            const finishBoth2 = startLand + landDuration[i];
            
            // Ambil minimum untuk pasangan ini
            const minForPair = Math.min(finishBoth1, finishBoth2);
            minFinish = Math.min(minFinish, minForPair);
        }
    }
    
    return minFinish;
}