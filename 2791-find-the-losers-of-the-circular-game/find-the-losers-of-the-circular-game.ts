function circularGameLosers(n: number, k: number): number[] {
    const visited = new Array(n).fill(false); 

    let currentPost = 0, stepCounter = 1; 

    visited[currentPost] = true;

    while(true){
        let jump = stepCounter * k; 
        const nextPost = (currentPost + jump) % n ; 

        if(visited[nextPost]) break;
        else {
            visited[nextPost] = true;
            currentPost = nextPost; 
            stepCounter++
        }
    }

    const losers = [];

    for(let i = 0; i < n; i++){
        if(!visited[i]) losers.push(i + 1)
    }

    return losers
};