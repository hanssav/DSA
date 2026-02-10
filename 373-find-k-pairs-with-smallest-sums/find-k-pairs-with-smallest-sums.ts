class MyMinHeap {
    private heap: [number, number, number][];

    constructor() {
        this.heap = [];
    }

    size(): number {
        return this.heap.length;
    }

    push(val: [number, number, number]): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): [number, number, number] | undefined {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent][0] <= this.heap[index][0]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const res: number[][] = [];
    if (!nums1.length || !nums2.length || k <= 0) return res;

    // Gunakan nama class yang baru
    const minHeap = new MyMinHeap();

    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        minHeap.push([nums1[i] + nums2[0], i, 0]);
    }

    while (res.length < k && minHeap.size() > 0) {
        const item = minHeap.pop();
        if (!item) break;

        const [_, i, j] = item;
        res.push([nums1[i], nums2[j]]);

        if (j + 1 < nums2.length) {
            minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }

    return res;
}