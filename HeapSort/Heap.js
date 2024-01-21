class Heap {

    constructor() {

      this.heap = [];

    }
  
    // function to get parent index
    getParentIndex(index) {

      return Math.floor((index - 1) / 2);

    }
  
    // function to get left child index
    getLeftChildIndex(index) {

      return 2 * index + 1;

    }
  
    // function to get right child index
    getRightChildIndex(index) {

      return 2 * index + 2;

    }
  
    // function to swap two elements in the heap
    swap(index1, index2) {

      const temp = this.heap[index1];

      this.heap[index1] = this.heap[index2];

      this.heap[index2] = temp;

    }
    
   // function to heapify up
   heapifyUp(index) {

    const parentIndex = this.getParentIndex(index);

    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {

      this.swap(index, parentIndex);

      this.heapifyUp(parentIndex);

    }

  }
   
  
    // function to heapify down
    heapifyDown(index) {

      const leftChildIndex = this.getLeftChildIndex(index);

      const rightChildIndex = this.getRightChildIndex(index);

      let minIndex = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
        
        minIndex = leftChildIndex;

      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {

        minIndex = rightChildIndex;

      }

      if (minIndex !== index) {

        this.swap(index, minIndex);

        this.heapifyDown(minIndex);

      }

    }
  
    // function to insert an element in the heap
    insert(value) {

      this.heap.push(value);

      this.heapifyUp(this.heap.length - 1);

    }
  
    // function to remove the minimum element from the heap
    remove() {

      if (this.heap.length === 0) {

        return null;

      }

      if (this.heap.length === 1) {

        return this.heap.pop();

      }

      const min = this.heap[0];

      this.heap[0] = this.heap.pop();

      this.heapifyDown(0);

      return min;

    }
  
    // function to perform heap sort
    heapSort() {

      const sortedArray = [];

      while (this.heap.length > 0) {

        sortedArray.push(this.remove());

      }

      return sortedArray;

    }
  
   

}
  
// ==================TEST CASES==================

const heap = new Heap();

//heap.buildHeapFromArray([3, 7, 2, 1, 9, 8]);

heap.insert(3)
heap.insert(7)
heap.insert(2)
heap.insert(1)
heap.insert(9)
heap.insert(8)



console.log(heap.remove()); // 1


console.log(heap.heapSort()); // [2, 3, 7, 8, 9]