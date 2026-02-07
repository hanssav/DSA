function fillCups(amount: number[]): number {
    amount.sort((a, b) => b - a);

    let count = 0;

    while(amount[0] > 0){
        if(amount[1] > 0){
            amount[0]--;
            amount[1]--;
        } else {
            amount[0]--;
        }

        count++; 

        amount.sort((a, b) => b - a);
    }

    return count;
};