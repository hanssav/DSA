function isPerfectSquare(num: number): boolean {
    let low = 0; 
    let heigh = num; 

    while(heigh >= low){
        let mid = Math.floor((low + heigh) / 2); 
        let sq = mid * mid; 

        if(sq === num)return true;
        else if(sq < num) low = mid + 1; 
        else heigh = mid - 1;
    }   

    return false;
};