function timeRequiredToBuy(tickets: number[], k: number): number {
    let targetTickets = tickets[k]; 

    let totalTime = 0; 

    for(let i = 0; i < tickets.length; i++){
        if(i <= k) totalTime += Math.min(tickets[i], targetTickets);
        else totalTime += Math.min(tickets[i], targetTickets - 1);
    }

    return totalTime
};