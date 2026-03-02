function maxHeightOfTriangle(red: number, blue: number): number {
    // Coba dua kemungkinan: merah di baris ganjil atau biru di baris ganjil
    return Math.max(
        getMaxHeight(red, blue),  // merah di ganjil, biru di genap
        getMaxHeight(blue, red)   // biru di ganjil, merah di genap
    );
}

function getMaxHeight(first: number, second: number): number {
    // first = warna untuk baris ganjil (1,3,5,...)
    // second = warna untuk baris genap (2,4,6,...)
    
    let height = 0;
    let row = 1;
    
    while (true) {
        if (row % 2 === 1) { // baris ganjil
            if (first >= row) {
                first -= row;
            } else {
                break;
            }
        } else { // baris genap
            if (second >= row) {
                second -= row;
            } else {
                break;
            }
        }
        height++;
        row++;
    }
    
    return height;
}