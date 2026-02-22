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
    let max_profit = 0;
    let j = 0;

    for(let i = 0; i < worker.length; i++){
        while(j < job_detail.length && job_detail[j][0] <= worker[i]){
            max_profit = Math.max(max_profit, job_detail[j][1]);
            j++;
        }; 

        total += max_profit
    }

    return total;
};