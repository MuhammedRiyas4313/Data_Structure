
function binarySearch(a,t){
  let left = 0;
  let right = a.length - 1;
  while (left <= right){
    let mid = Math.floor((left + right)/2);
    if(t == a[mid]) return mid;
    if(t < a[mid]){
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return -1;
}

function binSearRecursion(a,t){
  return search(a,t,0,a.length);
}

function search(a,t,left,right){
  if(left>right) return -1;
  let mid = Math.floor((left+right)/2);
  if(t === a[mid]){
    return mid;
  }
  if(t < a[mid]){
    return search(a,t,left,mid-1)
  }else{
    return search(a,t,mid+1,right)
  }
}

console.log(binSearRecursion([1,2,3,4,5,6],8))

class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0
  }
  isEmpty(){
    return this.size === 0 ;
  }
  getSize(){
    return this.size;
  }
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node;
    }else{
      node.next = this.head
      this.head = node;
    }
    this.size ++;
  }
  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node;
    }else{
      let curr = this.head;
      while(curr.next){
        curr = curr.next;
      }
      curr.next = node
    }
    this.size++;
  }
 
  insert(value,ind){
    
    if(ind < 0 || ind > this.size) return;
    
    if(ind === 0){
      this.prepend(value);
    }else{
      const node = new Node(value);
      let prev = this.head;
      for(let i = 0 ; i < ind-1 ; i++){
        prev = prev.next;
      }
      node.next = prev.next
      prev.next = node
      this.size ++;
    }
  }
  
  removeFrom(ind){
    if(ind < 0 || ind >= this.size) return null;
      let curr = this.head
    if(ind === 0 ){
      this.head = curr.next;
      return;
    }else {
      let removedValue;
       for(let i = 0; i < ind-1; i++){
        curr = curr.next;
       }
      removedValue = curr.next;
      curr.next = removedValue.next;
      this.size --;
    }
  }

  removeValue(value){
   if(this.isEmpty()){
     return 'No value to remove!';
   }
   if(this.head.value === value){
     let remove = this.head;
     this.head = remove.next;
     this.size --;
     return `removed value = ${value}`;
   }else{
     let prev = this.head;
     let remove;
     while(prev.next && prev.next.value !== value){
       prev = prev.next;
     }
     if(prev.next === null){
       return 'no value found!'
     }else{
       remove = prev.next;
       prev.next = remove.next;
       remove.next = null;
       this.size --;
       return `removed value${value}`
     }
   }
  }

  search(value){
    if(this.isEmpty()){
      return 'list is empty!'
    }
    let curr = this.head;
    let i = 0;
    while(curr&&curr.value !== value){
      curr = curr.next;
      i++;
    }
    if(curr){
      return `index of ${value} = ${i}`
    }else{
      return 'no value found !'
    }
  }

  reverse(){
    if(this.isEmpty()){
      return 'no items in the list !'
    }else{
      let curr = this.head;
      let prev = null;
      while(curr){
      let next = curr.next;
        curr.next = prev
        prev = curr;
        curr = next;
      }
      this.head = prev;
    } 
  }
  
  print(){
    let current = this.head;
    if(this.isEmpty()){ 
      console.log('list is empty')
    }else{
      let listValues = ''
      while(current !== null){
      listValues += ` ${current.value}`
      current = current.next;
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList()


console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.insert(50,1)
list.insert(55,1)
list.removeFrom(1)
console.log(list.removeValue(10))
console.log(list.removeValue(40))
console.log(list.search(50))
list.print()
list.reverse()
list.print()


function linearSearch(a,t){
  for(let i=0 ; i<a.length ; i++){
    if(a[i] === t){
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1,3,4,6,7,8,9],3))

function binarySearch(a,t){
  let left = 0;
  let right = a.length-1;
  while(left <= right){
    let mid = Math.floor((left+right)/2)
    if(t === a[mid]){
      return mid;
    }
    if(t < a[mid]){
      right = mid - 1
    }else{
      left = mid + 1
    }
  }
  return -1;
}



console.log(binarySearch([12,76,3,98,67,44],76))

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  isEmpty(){
    return this.size === 0;
  }
  getSize(){
    console.log('get size')
    return this.size;
  }
  
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size ++;
  }
  
  append(value){
    const node = new Node (value);
    if(this.isEmpty()){
      this.head = node;
    } else {
      let curr = this.head; 
      while(curr.next){
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size ++;
  }

  insert(value,t){
    if(this.isEmpty()){
      return -1;
    }
    let curr = this.head;
    
    while(curr&&curr.value !== t){
      curr = curr.next;
    }
    
    if(curr){
      const node = new Node(value)
      node.next = curr.next;
      curr.next = node;
    } else {
      return -1;
    }
  }
  
  print(){
    let curr = this.head;
    let listValues = ''
    while(curr){
      listValues += ` ${curr.value}`;
      curr = curr.next;
    }
    console.log(listValues)
  }
}

const newList = new LinkedList();

newList.prepend(30)
newList.prepend(20)
newList.prepend(10)
newList.append(40)
newList.append(50)
newList.append(60)

console.log(newList.insert(70,10))

newList.print()


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }
  
  push(value){
    if(this.top === null){
      const node = new Node(value)
      this.top = node;
    }else{
      let curr = this.top;
      const node = new Node(value)
      this.top = node;
      this.top.next = curr;
    }
  }

  pop(){
    if(this.top === null){
      console.log('Stack is empty')
    }else{
      let curr = this.top.next;
      this.top = curr;
    }
  }
  
  print(){
    let curr = this.top;
    let stackValues = ''
    if(curr === null){
      console.log('stack is empty')
      return;
    }
    while(curr){
      stackValues += ` ${curr.value}`
      curr = curr.next;
    }
    console.log(stackValues)
  }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(5)
stack.pop()
stack.pop()
stack.print()

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    if(this.rear === null){
      const node = new Node(value);
      this.front = node;
      this.rear = node;
    }else{
      const node = new Node(value);
      this.rear.next = node;
      this.rear = node;
    }
  }
  dequeue(){
    if(this.front === null){
      console.log('Q is empty')
    }else{
      this.front = this.front.next;
    }
  }
  print(){
    if(this.front === null){
      console.log('Queue is empty')
    }else{
      let curr = this.front;
      let qValues = '';
      while(curr){
        qValues += ` ${curr.value}`
        curr = curr.next;
      }
      console.log(qValues);
    }
  }
}

const q = new Queue();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.dequeue()
q.print()

class hashTable{
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }
  
  hash(key){
    let total = 0;
    for(let i=0; i<key.length; i++){
      total += key.charCodeAt(i)
    }
    return total % this.size;
  }
  
  set(key,value){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key,value]]
    }else{
      const sameKey = bucket.find(item => item[0] === key)
        bucket.push([key,value])
    }
  }
  
  get(key){
   const index = this.hash(key)
   const bucket = this.table[index]
   if(bucket){
     
       return bucket;
     
   }
    return -1;
  }

  remove(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find(item => item[0] === key)
      let removed = sameKeyItem;
      if(sameKeyItem){
        bucket.splice(bucket.indexOf(sameKeyItem),1)
        return removed;
      }
    }
    return -1;
  }
  
  display(){
    for(let i=0; i<this.table.length; i++){
      if(this.table[i]){
        console.log('index = ',i ,'value = ',this.table[i])
      }
    }
  }
}

const table = new hashTable(50);
table.set("name","riyas")
table.set("age",25)
table.set("place","calicut")
table.set("place","calicut")
console.log(table.get('place'))
console.log(table.remove('place'))
table.display()

class hashTable{
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }
  
  hash(key){
    let total = 0;
    for(let i=0; i<key.length; i++){
      total += key.charCodeAt(i)
    }
    return total % this.size;
  }

  set(key,value){
    const index = this.hash(key);
    const bucket = this.table[index];
    if(!bucket){
      this.table[index] = [[key,value]]
    }else{
     const sameKey = bucket.find(item => item[0] === key)
      if(sameKey){
        sameKey[1] = value
      }else{
        bucket.push([key,value])
      }
    }
  }

  get(key){
    const index = this.hash(key);
    const bucket = this.table[index];
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem){
        return sameKeyItem[1];
      }
    }
    return -1;
  }

  remove(key){
    const index = this.hash(key);
    const bucket = this.table[index];
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key);
      let removed = sameKeyItem
      if(sameKeyItem){
        bucket.splice(bucket.indexOf(sameKeyItem),1)
        return removed
      }
    }
    return -1; 
  }

  display(){
    for(let i=0; i<this.size; i++){
      if(this.table[i]){
        console.log(this.table[i])
      }
    }
  }
}

const tb = new hashTable(50);

tb.set('name','riyas')
tb.set('age',25)
tb.set('place','calicut')
console.log(tb.get('name'))
tb.display()
console.log(tb.remove('name'))
tb.display()

const arr = [8,20,-2,4,-6]

const bubbleSort = (a) => {
 let swap = true;
while(swap){
    swap = false;
     for(let i=0; i<a.length-1; i++){
          if(a[i]>a[i+1]){
            let temp = a[i+1]
            a[i+1] = a[i]
            a[i] = temp;
            swap = true;
          }
     }
  }
  return a;
}
console.log(bubbleSort(arr))


insertion sort.........

function insertionSort(arr){
  for(let i=1; i<arr.length; i++){
    let numberToInsert = arr[i];
    let j = i-1;
    while(j>=0 && arr[j] > numberToInsert){
      arr[j+1] = arr[j];
      j = j - 1;
    }
    arr[j+1] = numberToInsert
  }
  return arr;
}

const a = [8,20,-2,4,-6];
console.log(insertionSort(a))


quick sort................

function quickSort(a){
  if(a.length < 2){
    return a;
  }
    let pivot = a[a.length-1]
    let left = [];
    let right = [];
  for(let i=0; i<a.length-1; i++){
    if(a[i]<pivot){
      left.push(a[i])
    }else{
      right.push(a[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

function mergeSort(a){
  if(a.length < 2){
     return a;
  }
  const mid = Math.floor(a.length/2);
  const leftArr = a.slice(0,mid);
  const rightArr = a.slice(mid);

  return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(left,right){
  const sorted = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      sorted.push(left.shift())
    }else{
      sorted.push(right.shift())
    }
  }  
  return [...sorted,...left,...right]
}

const arr = [8,20,-2,4,-6];
console.log(insertionSort(arr),'insertion sort')


class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return this.root === null;
  }

  insertNode(value){
    
  const node = new Node(value);
    
    if(this.isEmpty()){
      this.root = node;
    }else{
      this.insert(this.root,node)
    }
    
  }

  insert(root,node){
    
    if(root.value > node.value){
      if(root.left === null){
        root.left = node;
      }else{
        this.insert(root.left,node)
      }
    }else{
      if(root.right === null){
        root.right = node
      }else{
        this.insert(root.right, node)
      }
    }
    
  }

  search(root,tar){
    
    if(!root){
      return false;
    }
    if(root.value === tar){
      return true;
    }else if(root.value < tar){
      return this.search(root.right, tar)
    }else if(root.value > tar){
      return this.search(root.left, tar)
    }
    
  }

  preorder(root){
    if(root){
      console.log(root.value)
      this.preorder(root.left)
      this.preorder(root.right)
    }
  }
  
  inorder(root){
    if(root){
      this.inorder(root.left)
      console.log(root.value)
      this.inorder(root.right)
    }
  }
  
  postorder(root){
    if(root){
      this.postorder(root.left)
      this.postorder(root.right)
      console.log(root.value)
    }
  }

  levelOrder(){
    const queue = []
    queue.push(this.root)
    while(queue.length){
      let curr = queue.shift()
      console.log(curr.value);
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
    }
  }

  min(root){

    if(root.left){
      return this.min(root.left)
    }else{
      return root.value;
    }
  }

  delete(value){
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value){
    
    if(root === null){
      return root;
    }
    if(value < root.value){
      root.left = this.deleteNode(root.left, value);
    }else if(value > root.value){
      root.right = this.deleteNode(root.right, value);
    }else{
      
      if(!root.left && !root.right){
        return null;
      }else if(!root.left){
        return root.right;
      }else if(!root.right){
        return root.left;
      }
      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right,root.value)
      
    }
    return root;
  }
  
}


const b = new BinarySearchTree()


b.insertNode(10)
b.insertNode(5)
b.insertNode(15)
b.insertNode(3)
b.insertNode(7)

// console.log(b.min(b.root))
b.delete(3)

b.levelOrder(b.root)

class Graph{
  
  constructor(){
    this.adjacentList = {};
  }
  
  addVertex(vertex){
    if(!this.adjacentList[vertex]){
      this.adjacentList[vertex] = new Set()
    }
  }

  addEdge(vertex1, vertex2){
    if(!this.adjacentList[vertex1]){
      this.addVertex(vertex1);
    }else if(!this.adjacentList[vertex2]){
      this.addVertex(vertex2);
    }else{
       this.adjacentList[vertex1].add(vertex2)
       this.adjacentList[vertex2].add(vertex1)
    }
  }

  hasEdge(vertex1, vertex2){
    return ( 
      this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1)
    )
  }

  removeEdge(vertex1, vertex2){
    if(this.adjacentList[vertex1]){
      this.adjacentList[vertex1].delete(vertex2)
    }
    if(this.adjacentList[vertex2]){
      this.adjacentList[vertex2].delete(vertex1)
    }
  }

  removeVertex(vertex){
    if(!this.adjacentList[vertex]){
      return;
    }
    for(let adjacent of this.adjacentList[vertex]){
      this.removeEdge(vertex, adjacent)
    }
    delete this.adjacentList[vertex]
  }

  bfs(startVertex){
    const queue = [];
    const visited = {};
    visited[startVertex] = true;
    queue.push(startVertex);
    while (queue.length) {
      const currentVertex = queue.shift();
      console.log(currentVertex);
      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
  }

  dfs(startVertex) {
    const visited = {};
    const stack = [];
  
    visited[startVertex] = true;
    stack.push(startVertex);
  
    while (stack.length > 0) {
      const currentVertex = stack.pop();
      console.log(currentVertex);
  
      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
  }

  display(){
    for(let vertex in this.adjacentList){
      console.log(vertex,'->',[...this.adjacentList[vertex]])
    }
  }
  
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('A','C')
// g.removeVertex('B')
graph.display()
graph.dfs("B")
console.log(graph.hasEdge('A','B'))

class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new Node();
      }
      current = current.children[char];
    }
    current.isWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("s");
trie.insert("a");
trie.insert("j");
console.log(trie.search("s"));
console.log(trie.startsWith("s"));

class MaxBinaryHeap {
  constructor() {
    this.arr = [];
  }

  heapify(arr, n, i) {
    
    let largest = i;
    
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      this.heapify(arr, n, largest);
    }
    
  }

  insert(data) {
    this.arr.push(data);
    let i = this.arr.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.arr[i] <= this.arr[parent]) {
        break;
      }
      let temp = this.arr[i];
      this.arr[i] = this.arr[parent];
      this.arr[parent] = temp;

      i = parent;
    }
  }

  remove() {
    const n = this.arr.length;
    if (n === 0) {
      return null;
    }
    let max = this.arr[0];
    this.arr[0] = this.arr[n - 1];
    this.arr.pop();
    this.heapify(this.arr, n - 1, 0);
    return max;
  }

  heapSort() {
    const n = this.arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(this.arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      let temp = this.arr[0];
      this.arr[0] = this.arr[i];
      this.arr[i] = temp;
      this.heapify(this.arr, i, 0);
    }
    return this.arr;
  }
}

const h = new MaxBinaryHeap();
h.insert(20);
h.insert(34);
h.insert(56);
h.insert(76);
h.insert(95);
h.remove();
console.log(h.arr);
console.log(h.heapSort());


class MaxBinaryHeap{
  constructor(){
    this.arr = []
  }
  heapify(arr, n, i){
    
    let large = i;
    
    let left = 2 * i + 1
    let right = 2 * i + 2
    
    if(left<n && arr[left] > arr[large]){
      large = left;
    }
    if(right < n && arr[right] > arr[large]){
      large = right;
    }
    if(large !== i){
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      this.heapify(arr, n, largest)
    }
  }
}


class Graph{
  
    constructor(){
      this.adjacentList = {};
    }
    
    addVertex(vertex){
      if(!this.adjacentList[vertex]){
        this.adjacentList[vertex] = new Set()
      }
    }
  
    addEdge(vertex1, vertex2){
      if(!this.adjacentList[vertex1]){
        this.addVertex(vertex1);
      }else if(!this.adjacentList[vertex2]){
        this.addVertex(vertex2);
      }else{
         this.adjacentList[vertex1].add(vertex2)
         this.adjacentList[vertex2].add(vertex1)
      }
    }
  
    hasEdge(vertex1, vertex2){
       return(
      this.adjancyList[vertex1].has(vertex2) && this.adjacnyList[vertex2].has(vertex1);
    )
    }
  
    removeEdge(vertex1, vertex2){
      if(this.adjacentList[vertex1]){
        this.adjacentList[vertex1].delete(vertex2)
      }
      if(this.adjacentList[vertex2]){
        this.adjacentList[vertex2].delete(vertex1)
      }
    }
  
    removeVertex(vertex){
      if(!this.adjacentList[vertex]){
        return;
      }
      for(let adjacent of this.adjacentList[vertex]){
        this.removeEdge(vertex, adjacent)
      }
      delete this.adjacentList[vertex]
    }
  
    bfs(startVertex){
      const queue = [];
      const visited = {};
      visited[startVertex] = true;
      queue.push(startVertex);
      while (queue.length) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
        this.adjacentList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        })
      }
    }
  
    dfs(startVertex) {
      const visited = {};
      const stack = [];
    
      visited[startVertex] = true;
      stack.push(startVertex);
    
      while (stack.length > 0) {
        const currentVertex = stack.pop();
        console.log(currentVertex);
    
        this.adjacentList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
    }
  
    display(){
      for(let vertex in this.adjacentList){
        console.log(vertex,'->',[...this.adjacentList[vertex]])
      }
    }
    
  }
  
  const g = new Graph()
  
  g.addVertex('A')
  g.addVertex('B')
  g.addVertex('A')
  