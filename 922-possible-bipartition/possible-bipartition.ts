function possibleBipartition(n: number, dislikes: number[][]): boolean {
    // dislike[i] = [ai, bi] => person ai doesn't like the person bi; 
    // return true if it is posible split everyone into two groups; 

    const adj = new Map(); 

    // will be: 0 => not process, 1 => blue grops, -1 => red groups
    const list = Array(n + 1).fill(0); 

    // p = person, t = target person doesn't like; 
    for(let [p, t] of dislikes){
        if(!adj.has(p)) adj.set(p, []); 
        if(!adj.has(t)) adj.set(t, []); 

        adj.get(p).push(t)
        adj.get(t).push(p)
    }

    for(let i = 0; i < n; i++){
        if(list[i] === 0){
            list[i] = 1; 
            const stack: number[] = [i];

            while(stack.length > 0){
                const curr = stack.pop(); 

                const neighbors = adj.get(curr) || []; 

                for(let neighbor of neighbors){
                    if(list[neighbor] === list[curr]) return false; 
                    
                    if(list[neighbor] === 0){
                        list[neighbor] = -list[curr]; 
                        stack.push(neighbor);
                    }
                }
            }
        }
    }

    return true
};