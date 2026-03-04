function minimumFlips(n: number): number {
    let bin = n.toString(2);

    const binarr = bin.split(""); 

    let left = 0; 
    let right = binarr.length - 1; 

    let count = 0; 

    while(right > left){
        if(binarr[left] !== binarr[right]){
            [binarr[left], binarr[right]] = [binarr[right], binarr[left]];
            count += 2;

        }
        left++
        right--
    }

    return count
};