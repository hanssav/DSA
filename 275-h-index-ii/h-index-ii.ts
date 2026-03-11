function hIndex(citations: number[]): number {
    const n = citations.length;
    let left = 0; 
    let right = n - 1; 

    while(left <= right){
        const mid = Math.floor((left + right) / 2); 

        let count = n - mid; 

        if(citations[mid] === count){
            return count;
        } else if(citations[mid] < count){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return n - left
};