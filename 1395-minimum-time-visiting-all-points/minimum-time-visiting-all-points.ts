function minTimeToVisitAllPoints(points: number[][]): number {
    let total = 0; 

    for(let i = 0; i < points.length - 1; i++){
        const [x1, y1] = points[i]; 
        const [x2, y2] = points[i + 1]; 

        const diffX = Math.abs(x2 - x1); 
        const diffY = Math.abs(y2 - y1);

        total += Math.max(diffX, diffY)
    }

    return total
};