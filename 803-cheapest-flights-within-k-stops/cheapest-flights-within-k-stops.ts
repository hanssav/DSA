function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    /* 
    * n = cities
    * flights[i] = [from, to, price]; 
    * src = start; 
    * dst = destination; 
    * k = max transit; 

    *if no route return -1;

    * question: return the cheapest price from src to dst; 

    * check posibilities direct transit; 
    * loop using queue/ stack; 
    * check has visited too; 
    */

    const m = new Map(); 
    for(let [s, d, p] of flights){
        if(!m.has(s)) m.set(s, [])
        m.get(s)!.push([d, p]); 
    }

    // --- TAMBAHKAN INI: Catatan harga termurah ke setiap kota ---
    const minPriceToCity = new Array(n).fill(Infinity);
    minPriceToCity[src] = 0;
    // ----------------------------------------------------------

    const queue: [number, number, number][] = [[src, 0, 0]]; 
    let res = Infinity; 

    while(queue.length > 0){
        const [city, total_price, stops] = queue.shift()!; 

        // Berhenti jika sudah lebih dari k transit
        if(stops > k) continue; 

        for(const [next, cost] of m.get(city) || [] ) {
            const newPrice = total_price + cost;

            // LOGIKA "BERITA BAGUS":
            // Hanya lanjut jika harga baru ini lebih murah dari yang pernah ada
            if(newPrice < minPriceToCity[next]) {
                minPriceToCity[next] = newPrice;
                
                if(next === dst) {
                    res = Math.min(res, newPrice);
                } else {
                    queue.push([next, newPrice, stops + 1]);
                }
            }
        }
    }

    return res === Infinity ? -1 : res;
}