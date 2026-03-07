function countKConstraintSubstrings(s: string, k: number): number {
    let left = 0, count0 = 0, count1 = 0, totalSubstring = 0; 

    for(let r = 0; r < s.length; r++){
        if(s[r] === "0") count0++; 
        else count1++

        while(count0 > k && count1 > k){
            if(s[left] === "0") count0--; 
            else count1--;
            left++;
        }

        totalSubstring += (r - left + 1);
    }

    return totalSubstring
};