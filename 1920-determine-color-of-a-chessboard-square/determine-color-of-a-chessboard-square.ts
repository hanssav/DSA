function squareIsWhite(coordinates: string): boolean {
    // add_notes

    // change word to num, a → 1, b → 2, c → 3, ..., h → 8.
    // sum col_num + num_row; 
    // if sum is odd (white) / true, otherwise false / black
    const w = coordinates[0].charCodeAt(0) - 96; 
    const num = parseInt(coordinates[1])

    return (w + num) % 2 === 1
};