function shortestReach(n, edges, s) {
    // Build adjacency list
    const adj = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    const dist = Array(n + 1).fill(Infinity);
    dist[s] = 0;

    // MinHeap implementation using array
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(item) {
            this.heap.push(item);
            this.bubbleUp(this.heap.length - 1);
        }

        pop() {
            if (this.heap.length === 0) return null;
            if (this.heap.length === 1) return this.heap.pop();
            
            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.sinkDown(0);
            return top;
        }

        bubbleUp(idx) {
            while (idx > 0) {
                const parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[parentIdx][1] <= this.heap[idx][1]) break;
                [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
                idx = parentIdx;
            }
        }

        sinkDown(idx) {
            const len = this.heap.length;
            while (true) {
                let smallest = idx;
                const left = 2 * idx + 1;
                const right = 2 * idx + 2;

                if (left < len && this.heap[left][1] < this.heap[smallest][1]) {
                    smallest = left;
                }
                if (right < len && this.heap[right][1] < this.heap[smallest][1]) {
                    smallest = right;
                }
                if (smallest === idx) break;

                [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                idx = smallest;
            }
        }

        isEmpty() {
            return this.heap.length === 0;
        }
    }

    const heap = new MinHeap();
    heap.push([s, 0]);

    while (!heap.isEmpty()) {
        const [node, d] = heap.pop();
        
        // Skip if we've already found a shorter path
        if (d > dist[node]) continue;

        // Relax edges
        for (const [next, w] of adj[node]) {
            const newDist = d + w;
            if (newDist < dist[next]) {
                dist[next] = newDist;
                heap.push([next, newDist]);
            }
        }
    }

    // Build result: distances to all nodes except source
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i !== s) {
            result.push(dist[i] === Infinity ? -1 : dist[i]);
        }
    }
    return result;
}