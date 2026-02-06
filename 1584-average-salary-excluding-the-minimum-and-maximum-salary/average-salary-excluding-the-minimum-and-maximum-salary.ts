function average(salary: number[]): number {
    salary.sort((a, b) => a - b);
    const sliced = salary.slice(1, salary.length - 1); 
    
    return sliced.reduce((acc, curr) => acc + curr, 0) / sliced.length;
};