function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];
    
    const m = new Map(); 
    const degree = new Array(n).fill(0);

    for(let [u, v] of edges){
        if(!m.has(u)) m.set(u, []); 
        if(!m.has(v)) m.set(v, []); 

        m.get(u)!.push(v); 
        m.get(v)!.push(u); 

        degree[u]++;
        degree[v]++;
    }

    let leaves: number[] = []
    for(let i = 0; i < n; i++){
        if(degree[i] === 1){
            leaves.push(i)
        }
    }

    let total_nodes = n; 

    while(total_nodes > 2){
        total_nodes -= leaves.length; 

        const new_leaves: number[] = []

        for(let leaf of leaves){
            const neighbors = m.get(leaf) || []; 

            for(let neighbor of neighbors){
                degree[neighbor]--;
                if(degree[neighbor] === 1){
                    new_leaves.push(neighbor); 
                }
            }
        }

        leaves = new_leaves
    }
    return leaves
};