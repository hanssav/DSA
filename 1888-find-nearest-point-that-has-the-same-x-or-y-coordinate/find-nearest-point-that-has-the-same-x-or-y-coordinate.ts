function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let minDis = Infinity; 

    let bestIndex = -1; 

    for(let i = 0; i < points.length; i++){
        const a = points[i][0]; 
        const b = points[i][1]; 

        if(a === x || b === y){
            const d = Math.abs(x - a) + Math.abs(y - b); 

            if(minDis > d){
                minDis = d;
                bestIndex = i;
            }
        }
    }

    return bestIndex
};