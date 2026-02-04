function isCovered(ranges: number[][], left: number, right: number): boolean {
    for(let i = left; i <= right; i++){
        let inRange = false;
        for(let j = 0; j < ranges.length; j++){
            if(ranges[j][0] <= i && i <= ranges[j][1]){
                inRange = true;
                break;
            }
        }

        if(!inRange) return false;
    }

    return true;
};