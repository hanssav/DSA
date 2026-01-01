function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];
    
    // n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
    // adj data to see neighbor; 
    const m = new Map(); 
    //count neighbor data; 
    const degree = new Array(n).fill(0);

    for(let [u, v] of edges){
        if(!m.has(u)) m.set(u, []); 
        if(!m.has(v)) m.set(v, []); 

        m.get(u)!.push(v); 
        m.get(v)!.push(u); 

        degree[u]++;
        degree[v]++;
    }

    //find singgle leaves/ outside leave
    let leaves: number[] = []
    for(let i = 0; i < n; i++){
        if(degree[i] === 1){
            leaves.push(i)
        }
    }

    // 
    let total_nodes = n; 
    while(total_nodes > 2){
        // delete 4 leave (0, 1, 2, 5)
        total_nodes -= leaves.length; // 6 - 4 = 2 (Sisa 2 node) 

        const new_leaves: number[] = []

        for(let leaf of leaves){
            // Ambil tetangga dari si daun yang mau dihapus
            const neighbors = m.get(leaf) || []; 

            for(let neighbor of neighbors){
                // Karena 'leaf' dihapus, maka koneksi si tetangga berkurang 1
                degree[neighbor]--;
                // JIKA tetangga itu sekarang cuma punya 1 koneksi, 
                // dia resmi jadi daun baru untuk ronde berikutnya
                if(degree[neighbor] === 1){
                    new_leaves.push(neighbor); 
                }
            }
        }
        // Update daftar daun untuk iterasi berikutnya
        leaves = new_leaves // leaves sekarang jadi [3, 4]
    }
    return leaves
};