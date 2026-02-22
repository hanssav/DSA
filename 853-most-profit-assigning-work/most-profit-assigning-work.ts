function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    //[[difficulty, profit]]
    let job_detail: number[][] = []
    
    for(let i = 0; i < profit.length; i++){
        let d = difficulty[i]; 
        let p = profit[i]; 

        job_detail.push([d, p]); 
    }

    job_detail.sort((a, b) => a[0] - b[0]); 
    worker.sort((a, b) => a - b); 
    
    let total = 0; 

    for(let i = 0; i < worker.length; i++){
        let max = 0;

        for(let j = 0; j < job_detail.length; j++){
            if(worker[i] < job_detail[j][0]) break;

            max = Math.max(max, job_detail[j][1])
        }

        total += max;
    }

    return total;
};