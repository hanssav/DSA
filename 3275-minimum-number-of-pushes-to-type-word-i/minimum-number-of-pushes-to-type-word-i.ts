function minimumPushes(word: string): number {
    const n = word.length; 
    let totalPushed = 0; 

    for(let i = 0; i < n; i++){
        const clicked = Math.floor(i / 8) + 1;

        totalPushed += clicked;
    }

    return totalPushed
};