function maxWidthOfVerticalArea(points: number[][]): number {
    const x = []; 

    for(const [xVal, _] of points){
        x.push(xVal);
    }

    x.sort((a, b) => a - b); 

    let dis = 0; 

    for(let i = 1; i < x.length; i++){
        dis = Math.max(dis, x[i] - x[i - 1]);
    }

    return dis
};