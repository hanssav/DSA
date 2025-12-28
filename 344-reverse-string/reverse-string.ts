/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let right = s.length - 1; 
    let left = 0; 

    while(right > left){
        let temp = s[right]
        s[right] = s[left]
        s[left] = temp; 

        right-- 
        left++
    }
};