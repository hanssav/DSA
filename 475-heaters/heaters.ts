function findRadius(houses: number[], heaters: number[]): number {
    houses.sort((a, b) => a - b); 
    heaters.sort((a, b) => a - b); 

    let maxRadius = 0; 

    for(let house of houses){
        let left = 0; 
        let right = heaters.length - 1; 

        while(left <= right){
            const mid = Math.floor((left + right) / 2); 

            if(heaters[mid] === house){
                left = mid; 
                break;
            } else if(heaters[mid] < house){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        let heaterLeftDist = Infinity; 
        let heaterRightDist = Infinity;

        if(left > 0){
            heaterLeftDist = Math.abs(house - heaters[left - 1]);
        }

         if (left < heaters.length) {
            heaterRightDist = Math.abs(house - heaters[left]);
        }

        const minDist = Math.min(heaterLeftDist, heaterRightDist);
        maxRadius = Math.max(maxRadius, minDist);
    }

    return maxRadius;
};