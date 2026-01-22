/* 
    Rumus: 
    S= (k * (k+1)) / 2
​   
    Manual: 1+2+3+4+5=15 koin.
    Rumus = (5 * (5 + 1)) / 2
*/ 
function arrangeCoins(n: number): number {
    let low = 0; 
    let high = n;

    while(high >= low){
        let mid = Math.floor(low + ((high - low) / 2)); 
        let need = (mid * (mid + 1)) / 2

        if(need === n) return mid; 
        else if(need < n) low = mid + 1;
        else high = mid - 1;
    }

    return high;
};