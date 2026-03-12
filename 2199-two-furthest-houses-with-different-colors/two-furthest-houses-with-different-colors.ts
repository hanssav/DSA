function maxDistance(colors: number[]): number {
    const n = colors.length; 

    let a = 0;
    for(let i = n - 1; i >= 0; i--){
        if(colors[i] !== colors[0]){
            a = Math.max(a, i - 0)
            break;
        }
    }

    for(let i = 0; i < n; i++){
        if(colors[i] !== colors[n - 1]){
            a = Math.max(a, (n - 1) - i)
            break
        }
    }

    return a; 
};