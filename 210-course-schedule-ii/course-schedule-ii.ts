function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // 1. Persiapan: Menghitung 'In-Degree' (jumlah gembok) dan 'Adjacency List' (daftar kunci)
    const in_degree = new Array(numCourses).fill(0);
    const adj_list = new Map<number, number[]>(); 

    for(let [a, b] of prerequisites){
        // a = mata kuliah tujuan (target), b = prasyarat (source)
        // Jika b selesai, maka a bisa dikurangi jumlah syaratnya
        if(!adj_list.has(b)) adj_list.set(b, []); 

        in_degree[a]++; // Menambah jumlah syarat untuk mata kuliah 'a'
        adj_list.get(b)!.push(a); // Mencatat bahwa 'b' membuka jalan ke 'a'
    }

    // 2. Scan Awal: Mencari semua mata kuliah yang tidak punya syarat (bisa langsung diambil)
    const queue: number[] = [];
    for(let i = 0; i < numCourses; i++){
        if(in_degree[i] === 0) queue.push(i);
    }

    const res: number[] = []; 

    // 3. Eksekusi: Proses pengambilan mata kuliah satu per satu (Kahn's Algorithm)
    while(queue.length > 0){
        // Ambil mata kuliah yang sudah tidak punya gembok
        const curr = queue.shift()!; 
        res.push(curr); // Masukkan ke urutan belajar

        // Ambil daftar mata kuliah yang membutuhkan 'curr' sebagai syarat
        const neighbors = adj_list.get(curr); 

        if(neighbors){
            for(let next_course of neighbors){
                // Kurangi jumlah gembok mata kuliah tetangga
                in_degree[next_course]--; 
                
                // Jika gembok sudah habis (0), masukkan ke antrean untuk diambil berikutnya
                if(in_degree[next_course] === 0) {
                    queue.push(next_course);
                }
            }
        }
    }
    
    // 4. Validasi: Jika panjang 'res' sama dengan 'numCourses', berarti semua bisa diambil.
    // Jika tidak sama, berarti ada siklus (saling mengunci) dan tidak semua bisa lulus.
    return res.length === numCourses ? res : [];
};