function minimumDistance(nums: number[]): number {
    const map = new Map<number, number[]>(); 

    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])) map.set(nums[i], []); 

        map.get(nums[i])!.push(i);
    }

    let min = Infinity;

    for (const vals of map.values()) {
        if (vals.length >= 3) {
            for (let i = 0; i <= vals.length - 3; i++) {
                const distance = 2 * (vals[i + 2] - vals[i]);
                min = Math.min(min, distance);
            }
        }
    }

    return min === Infinity ? -1 : min;
};