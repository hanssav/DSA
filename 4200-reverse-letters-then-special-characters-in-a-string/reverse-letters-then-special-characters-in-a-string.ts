function reverseByType(s: string): string {
    const arr = s.split("");

    let left = 0; 
    let right = s.length - 1; 

    while(right > left){
        if(/^[a-z]+$/.test(arr[left]) && /^[a-z]+$/.test(arr[right])){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; 
            right--;
        } else if(!/^[a-z]+$/.test(arr[left])){
            left++;
        } else {
            right--;
        }
    }

    left = 0; 
    right = arr.length - 1; 

    while(right > left){
        if(!/^[a-z]+$/.test(arr[left]) && !/^[a-z]+$/.test(arr[right])){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; 
            right--;
        } else if(/^[a-z]+$/.test(arr[left])){
            left++;
        } else {
            right--;
        }
    }


    return arr.join("")
};