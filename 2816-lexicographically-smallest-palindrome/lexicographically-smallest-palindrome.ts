function makeSmallestPalindrome(s: string): string {
    const arr = s.split(""); 

    let left = 0; 
    let right = arr.length - 1;

    while(left < right){
        let lval = arr[left]; 
        let rval = arr[right];

        if(lval !== rval){
            if(lval < rval){
                arr[right] = lval;
            } else {
                arr[left] = rval;
            }
        }; 

        left++; 
        right--;
    }

    return arr.join("")
};