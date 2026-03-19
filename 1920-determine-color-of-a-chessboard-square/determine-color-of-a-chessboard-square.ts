function squareIsWhite(coordinates: string): boolean {
    const w = coordinates[0].charCodeAt(0) - 96; 
    const num = parseInt(coordinates[1])

    return (w + num) % 2 === 1
};