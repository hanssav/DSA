function canVisitAllRooms(rooms: number[][]): boolean {
    // key 1 true / unlock; 0 false / lock; 
    const keys = Array(rooms.length).fill(0)

    function dfs(node: number){
        
        // console.log(node, 'node')

        keys[node] = 1; 

        for(let neighbor of rooms[node]){
            if(!keys[neighbor]) dfs(neighbor);
        }
    }

    dfs(0)

    // console.log(keys, 'keys')
    // for(let i = 0; i < keys.length; i++){
    //     if(!keys[i]) dfs(i)
    // }

    return keys.every((key) => key === 1)
};