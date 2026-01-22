function arrangeCoins(n: number): number {
    let row: number = 1;

    while(n > 0){
        n -= row;
        if(n > row) row++;
    }

    return row;
};