function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    //  Jika (Kolom + Baris) adalah Genap, maka kotak tersebut berwarna Hitam.
    // Jika (Kolom + Baris) adalah Ganjil, maka kotak tersebut berwarna Putih.  

    const pos1 = coordinate1[0].charCodeAt(0) - 96 + parseInt(coordinate1[1]); 
    const pos2 = coordinate2[0].charCodeAt(0) - 96 + parseInt(coordinate2[1]); 

    let p1 = pos1 % 2 === 0; 
    let p2 = pos2 % 2 === 0; 

    return p1 === p2 
};