function findClosestElements(arr: number[], k: number, x: number): number[] {
    let l = 0; 
    let r = arr.length - 1;

    while(r - l + 1 > k){
        let disL = Math.abs(arr[l] - x); 
        let disR = Math.abs(arr[r] - x); 
        
        if(disL === disR || disR > disL) r--;
        else l++; 
    }

    return arr.slice(l, r + 1);
};