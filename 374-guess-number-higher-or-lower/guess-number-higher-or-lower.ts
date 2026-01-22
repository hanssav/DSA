/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let low = 1; 
    let high = n; 

    while(high >= low){
        const mid = low + Math.floor((high - low) / 2); 
        const res = guess(mid); 

        if(res === 0) return mid; 
        else if(res === -1) high = mid - 1; 
        else low = mid + 1; 
    }

    return -1;
};