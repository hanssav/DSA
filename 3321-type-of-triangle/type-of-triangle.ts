function triangleType(nums: number[]): string {
    const [a, b, c] = nums.sort((a, b) => a - b); 

    if(a + b <= c) return "none"; 

    if(a === b && b === c) return "equilateral"
    if (a === b || b === c || a === c) return "isosceles";

    return "scalene" 
};