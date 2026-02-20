function leastInterval(tasks: string[], n: number): number {
    const counts = new Map<string, number>(); 

    for(const task of tasks){
        counts.set(task, (counts.get(task) || 0) + 1); 
    };

    const sorted_tasks = [...counts].sort((a, b) => b[1] - a[1]);

    const max_freq = sorted_tasks[0][1];

    let max_count = 0; 
    for(const [task, count] of sorted_tasks){
        if(count === max_freq) max_count++
        else break;
    }    

    const total_slots = (max_freq - 1) * (n + 1) + max_count;

    return Math.max(total_slots, tasks.length)
};