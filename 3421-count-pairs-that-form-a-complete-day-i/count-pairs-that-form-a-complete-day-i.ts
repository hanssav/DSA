function countCompleteDayPairs(hours: number[]): number {
    const n = hours.length; 

    let count = 0; 

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if((hours[i] + hours[j]) % 24 === 0) count++;
        }
    }
    return count;
};