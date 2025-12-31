function findCircleNum(isConnected: number[][]): number {
    const len = isConnected.length; 
    let visited = new Array(len).fill(false)

    let provinces = 0; 

    const dfs = (curr_city, matrixs, visited) => {
        visited[curr_city] = true; 

        for(let j = 0; j < matrixs.length; j++){

            if(matrixs[curr_city][j] === 1 && !visited[j]){
                dfs(j, matrixs, visited)
            }
        }
    }

    for(let i = 0; i < len; i++){
        if(!visited[i]){
            provinces++; 

            dfs(i, isConnected, visited)    
        }
    }

    return provinces
};