function destCity(paths: string[][]): string {
    const sources = new Set<string>();  
    // const all_cities = new Set<string>(); 

    for(let [src, _] of paths){
        sources.add(src);
        // all_cities.add(src); 
        // all_cities.add(dest);  
    }

    for(let [_, dest] of paths){
        // console.log(typeof city, sources.has(city))
        if(!sources.has(dest)) return dest; 
    }

    return ""
};