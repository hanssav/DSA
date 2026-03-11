function isWinner(player1: number[], player2: number[]): number {
    const calc = (pins: number[]) => {
        let total = 0; 
        for(let i = 0; i < pins.length; i++){
            const bonus = (i > 0 && pins[i - 1] === 10) || (i > 1 && pins[i - 2] === 10);
            total += bonus ? 2 * pins[i] : pins[i];
            
        }

        return total;
    }

    const s1 = calc(player1);
    const s2 = calc(player2);

    if (s1 > s2) return 1;
    if (s2 > s1) return 2;
    return 0;
};