function captureForts(forts: number[]): number {
    const n = forts.length; 

    let maxCaptured = 0; 
    let lastIndex = -1;

    for(let i = 0; i < n; i++){
        if(forts[i] !== 0){
            if(lastIndex !== -1 && forts[lastIndex] !== forts[i]){                
                const curr = i - lastIndex - 1; 

                if(curr > maxCaptured){
                    maxCaptured = curr
                }
            }

            lastIndex = i;
        }
    }

    return maxCaptured;
};