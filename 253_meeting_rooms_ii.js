class Heap {
    constructor (getValue = v => v) {
        this.getValue = getValue;
        this.data = [];
    }
    
    getLeftChildIdx (i) {
        return i * 2 + 1;
    }
    
    getRightChildIdx (i) {
        return this.getLeftChildIdx(i) + 1;
    }
    
    getParentIdx (i) {
        return Math.floor((i - 1) / 2);
    }
    
    swap (x, y) {
        const temp = this.data[x];
        this.data[x] = this.data[y];
        this.data[y] = temp;
    }
    
    siftUp (i) {
        if (i === 0) {
            return;
        }
        const child = this.data[i];
        const childValue = this.getValue(child);
        
        const parentIdx = this.getParentIdx(i);
        const parent = this.data[parentIdx];
        const parentValue = this.getValue(parent);
        
        if (parentValue < childValue) {
            this.swap(i, parentIdx);
            this.siftUp(parentIdx);
        }
    }
    
    siftDown (i) {
        const parent = this.data[i];
        const parentValue = this.getValue(parent);
        const leftChildIdx = this.getLeftChildIdx(i);
        const rightChildIdx = this.getRightChildIdx(i);
        
        let swapIndex;
        if (leftChildIdx < this.data.length) {
            const leftChild = this.data[leftChildIdx];
            const leftChildValue = this.getValue(leftChild);
            if (leftChildValue > parentValue) {
                swapIndex = leftChildIdx;
            }
            
            if (rightChildIdx < this.data.length) {
                const rightChild = this.data[rightChildIdx];
                const rightChildValue = this.getValue(rightChild);
                if (rightChildValue > parentValue && rightChildValue > leftChildValue) {
                    swapIndex = rightChildIdx;
                }
            }
        }
        
        if (swapIndex !== undefined) {
            this.swap(i, swapIndex);
            this.siftDown(swapIndex)
        }
        
    }
    
    pop () {
        const res = this.data[0];
        const end = this.data.pop();

        if (this.data.length) {
            this.data[0] = end;
            this.siftDown(0);
        }
        
        return res;
    }
    
    push (val) {
        this.data.push(val);
        this.siftUp(this.data.length - 1);
    }
    
    peek () {
        return this.data[0];
    }
    
    size () {
        return this.data.length;
    }
}

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    const heap = new Heap(v => -v.end);

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const nextEndingMeeting = heap.peek();
        if (nextEndingMeeting && nextEndingMeeting.end <= interval.start) {
            heap.pop();
        }
        heap.push(interval);
    }
    
    return heap.size();
};
