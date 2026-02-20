function eraseOverlapIntervals(intervals: number[][]): number {
    if(intervals.length === 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]); 

    let curr = intervals[0][1];
    let count = 0; 

    for(let i = 1; i < intervals.length; i++){
        const [start, end] = intervals[i]; 

        if(curr > start){
            count++;
        } else {
            curr = end;
        }

    }

    return count;
};