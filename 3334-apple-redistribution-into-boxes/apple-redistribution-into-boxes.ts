function minimumBoxes(apple: number[], capacity: number[]): number {
    capacity.sort((a, b) => b - a); 
    let sum = apple.reduce((acc, curr) => acc + curr, 0); 

    let count = 0; 
    for(let i = 0; i < capacity.length; i++){
        sum -= capacity[i]; 
        count++;

        if(sum < 1) return count;
    }

    return -1; 
};