function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MyMinHeap(); 

    for(let num of nums){
        minHeap.push(num); 

        if(minHeap.size() > k ){
            minHeap.pop();
        }
    }

    return minHeap.peek();
};

class MyMinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    // Mendapatkan indeks parent
    private getParentIndex(i: number) { return Math.floor((i - 1) / 2); }
    // Mendapatkan indeks anak kiri
    private getLeftChildIndex(i: number) { return 2 * i + 1; }
    // Mendapatkan indeks anak kanan
    private getRightChildIndex(i: number) { return 2 * i + 2; }

    push(val: number) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return root;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    // Mengatur ulang ke atas setelah push
    private bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // Mengatur ulang ke bawah setelah pop
    private bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let left = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);
            let swap = null;

            if (left < length) {
                if (this.heap[left] < this.heap[index]) {
                    swap = left;
                }
            }

            if (right < length) {
                if (
                    (swap === null && this.heap[right] < this.heap[index]) ||
                    (swap !== null && this.heap[right] < this.heap[left])
                ) {
                    swap = right;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}