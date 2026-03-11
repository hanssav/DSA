function hardestWorker(n: number, logs: number[][]): number {
    let maxDuration = 0; 
    let resultId = 0; 
    let lastTime = 0; 

    for(let i = 0; i < logs.length; i++){
        const workedId = logs[i][0]; 
        const endTime = logs[i][1]; 

        const currentDuration = endTime - lastTime; 

        if(currentDuration > maxDuration){
            maxDuration = currentDuration; 
            resultId = workedId;
        } else if (currentDuration === maxDuration) {
            resultId = Math.min(resultId, workedId);
        }

        lastTime = endTime;
    }

    return resultId;
};