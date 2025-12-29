function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const in_degree = new Array(numCourses).fill(0);
    const adj_list = new Map(); 

    for(let [a, b] of prerequisites){
        if(!adj_list.has(b)) adj_list.set(b, []); 
        
        in_degree[a]++;
        adj_list.get(b).push(a); 
    }

    console.log(in_degree, adj_list)
    
    let queue: number[] = [];
    for (let i = 0; i < in_degree.length; i++) {
        if (in_degree[i] === 0) {
            queue.push(i);
        }
    }

    console.log(queue, 'queue')

    let count = 0; 

    while(queue.length > 0){
        const curr = queue.shift()!; 
        count++;

        const neighbor = adj_list.get(curr); 

        if(neighbor){
            for(let next_course of neighbor){
                in_degree[next_course]--; 
                if(in_degree[next_course] === 0) queue.push(next_course); 
            }
        }
    }

    return count === numCourses ? true : false 
};