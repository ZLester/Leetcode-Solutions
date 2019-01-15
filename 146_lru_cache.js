var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.data = {};
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.data[key] !== undefined) {
        const node = this.data[key];
        this.remove(node);
        this.add(node);

        return node.value;     
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.data[key] !== undefined) {
        this.remove(this.data[key]);
    } else {
        this.size++;
    }
    const node = new Node(key, value);
    this.add(node);
    this.data[key] = node;
    
    if (this.size > this.capacity) {
        this.evict();
    }
};

LRUCache.prototype.remove = function(node) {
    const { next, prev } = node;
    prev.next = next;
    next.prev = prev;
};

LRUCache.prototype.add = function(node) {
    const prev = this.tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
};
    
LRUCache.prototype.evict = function() {
    const node = this.head.next;
    this.head.next = node.next;
    node.next.prev = this.head;
    delete this.data[node.key];
    this.size--;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */