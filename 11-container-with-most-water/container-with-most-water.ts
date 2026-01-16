function maxArea(height: number[]): number {
    let left = 0; 
    let right = height.length - 1;
    
    let max = 0; 

    while(right > left){
        const heigh_l = height[left]; 
        const heigh_r = height[right];

        let calc = Math.min(heigh_l, heigh_r) * (right - left);

        // console.log(calc, right - left, Math.min(heigh_l, heigh_r), 'calc')
        if(calc > max) max = calc; 

        if(heigh_l <= heigh_r) left++; 
        else right--
    }

    return max
};