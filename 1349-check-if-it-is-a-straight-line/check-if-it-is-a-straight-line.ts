function checkStraightLine(coordinates: number[][]): boolean {
    if(coordinates.length < 3) return true; 

    const [x0, y0] = coordinates[0]
    const [x1, y1] = coordinates[1]; 

    for(let i = 2; i < coordinates.length; i++){
        const [xi, yi] = coordinates[i];

        if((y1 - y0) * (xi - x0) !== (yi - y0) * (x1 - x0)) return false;
    }

    return true;
};