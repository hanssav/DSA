function distributeCandies(candyType: number[]): number {
    let types = new Set(); 
    for(let candy of candyType){
        if(!types.has(candy)) types.add(candy)
    }

    const max_types = types.size
    // console.log(types, 'types', max_types);

    let max: number = Math.floor(candyType.length / 2)  
    let res = max >= max_types ? max_types : max;

    return res
};