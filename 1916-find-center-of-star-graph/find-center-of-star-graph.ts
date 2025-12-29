function findCenter(edges: number[][]): number {
    const m = new Map(); 
    const stars = []

    for(let [a, b] of edges){
        if(!m.has(a)) {
            m.set(a, 0);
            stars.push(a);
        } 
        if(!m.has(b)) {
            m.set(b, 0);
            stars.push(b);
        }

        m.set(a, m.get(a) + 1); 
        m.set(b, m.get(b) + 1);
    }

    console.log(stars, m)
    const [res] = stars.filter((star) => m.get(star) === stars.length - 1)

    console.log(res, 'res')
    return res
};