function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const adj = new Map<number, [number, number][]>();
    for (const [s, d, p] of flights) {
        if (!adj.has(s)) adj.set(s, []);
        adj.get(s)!.push([d, p]);
    }

    // Array untuk mencatat harga termurah ke setiap kota
    const minPrices = new Array(n).fill(Infinity);
    minPrices[src] = 0;

    // queue: [current_city, current_total_price, stops_count]
    let queue: [number, number, number][] = [[src, 0, 0]];
    let res = Infinity;

    while (queue.length > 0) {
        const [u, totalPrice, stops] = queue.shift()!;

        // Jika jumlah perhentian (transit) sudah melebihi k
        // Kita hitung penerbangan, jadi maksimal k transit = k + 1 penerbangan
        if (stops > k) continue;

        const neighbors = adj.get(u) || [];
        for (const [v, price] of neighbors) {
            const newPrice = totalPrice + price;

            // OPTIMASI UTAMA: 
            // Hanya masukkan ke antrean jika harga baru lebih murah 
            // dari yang pernah ditemukan untuk kota tersebut
            if (newPrice < minPrices[v]) {
                minPrices[v] = newPrice;
                
                if (v === dst) {
                    res = Math.min(res, newPrice);
                } else {
                    queue.push([v, newPrice, stops + 1]);
                }
            } else if (v === dst) {
                // Khusus untuk destinasi, kita tetap update res jika lebih murah
                // walaupun mungkin tidak lebih murah dari minPrices[v] (kasus edge)
                res = Math.min(res, newPrice);
            }
        }
    }

    return res === Infinity ? -1 : res;
}