function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0])

    for(let i = 0; i < intervals.length - 1; ){
        const curr = intervals[i]; 
        const next = intervals[i + 1]; 

        if(curr[1] >= next[0]){
            let temp = [Math.min(curr[0], next[0]), Math.max(curr[1], next[1])]
        
            intervals.splice(i, 2, temp); 
      
        } else i++;
    }

    return intervals;
};