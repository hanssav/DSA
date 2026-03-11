function earliestTime(tasks: number[][]): number {
    let min = Infinity; 

    for(const [s, t] of tasks){
        if((s + t) < min) min = s + t;
    }

    return min 
};