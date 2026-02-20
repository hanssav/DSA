function findMinDifference(timePoints: string[]): number {
    const minutes = timePoints.map((t) => countMinutes(t))
    minutes.sort((a, b) => a - b); 

    let minDiff = Infinity; 

    for(let i = 1; i < minutes.length; i++){
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }

    const circularDiff = (1440 - minutes[minutes.length - 1]) + minutes[0];
    minDiff = Math.min(minDiff, circularDiff); 

    return minDiff;
};

function countMinutes(time: string): number{
    const [h, m] = time.split(":").map(Number); 

    return h * 60 + m;
}