function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    let matchIdx = 0; 

    players.sort((a, b) => a - b); 
    trainers.sort((a, b) => a - b); 

    const target = players[0]; 

    let player = 0, trainer = 0, count = 0;  

    while(player < players.length && trainer < trainers.length){
        if(players[player] <= trainers[trainer]){
            player++; 
            trainer++;
            count++;
        } else {
            trainer++;
        }
    }; 

    return count;
};