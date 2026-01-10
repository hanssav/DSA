// function possibleBipartition(n: number, dislikes: number[][]): boolean {
//     // dislike[i] = [ai, bi] => person ai doesn't like the person bi; 
//     // return true if it is posible split everyone into two groups; 

//     const adj = new Map(); 

//     // will be: 0 => not process, 1 => blue grops, -1 => red groups
//     const list = Array(n + 1).fill(0); 

//     // p = person, t = target person doesn't like; 
//     for(let [p, t] of dislikes){
//         if(!adj.has(p)) adj.set(p, []); 
//         if(!adj.has(t)) adj.set(t, []); 

//         adj.get(p).push(t)
//         adj.get(t).push(p)
//     }

//     for(let i = 0; i < n; i++){
//         if(list[i] === 0){
//             list[i] = 1; 
//             const stack: number[] = [i];

//             while(stack.length > 0){
//                 const curr = stack.pop(); 

//                 const neighbors = adj.get(curr) || []; 

//                 for(let neighbor of neighbors){
//                     if(list[neighbor] === list[curr]) return false; 
                    
//                     if(list[neighbor] === 0){
//                         list[neighbor] = -list[curr]; 
//                         stack.push(neighbor);
//                     }
//                 }
//             }
//         }
//     }

//     return true
// };

function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    
    // Fungsi untuk mencari "ketua" kelompok
    const find = (i: number): number => {
        if (parent[i] === i) return i;
        return parent[i] = find(parent[i]); // Path compression
    };

    // Fungsi untuk menyatukan dua orang ke kelompok yang sama
    const union = (i: number, j: number) => {
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI !== rootJ) parent[rootI] = rootJ;
    };

    const enemy = new Array(n + 1).fill(0);

    for (const [u, v] of dislikes) {
        // Cek u
        if (find(u) === find(v)) return false; // Musuh ada di satu kelompok!
        
        // Satukan u dengan musuh-musuh si v
        if (enemy[v] !== 0) union(u, enemy[v]);
        else enemy[v] = u;

        // Satukan v dengan musuh-musuh si u
        if (enemy[u] !== 0) union(v, enemy[u]);
        else enemy[u] = v;
    }

    return true;
}