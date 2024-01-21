class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    
    //DFS
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    //BFS

    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
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
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return root
        }

        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    closest(key) {
        if (!this.root) {
            return null;
        }

        let closest = this.root.value;
        let current = this.root;

        while (current !== null) {
            if (Math.abs(current.value - key) < Math.abs(closest - key)) {
                closest = current.value;
            }

            if (key < current.value) {
                current = current.left;
            } else if (key > current.value) {
                current = current.right;
            } else{
                break;
            }
        }

        return closest;
    }
    

  
    

    isBST() {
        return this._isBST(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
      }
    
      _isBST(node, min, max) {
        if (node === null) {
          return true;  // An empty tree is a BST.
        }
    
        // Check if the current node's value is within the valid range.
        if (node.value <= min || node.value >= max) {
          return false;
        }
    
        // Recursively check the left and right subtrees with updated range limits.
        return (
          this._isBST(node.left, min, node.value) &&
          this._isBST(node.right, node.value, max)
        );
      }
}

const bst= new BinarySearchTree()

console.log("Tree is empty? ",bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(25)
bst.insert(6)

console.log(bst.search(bst.root,20));
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,25));

//bst.preOrder(bst.root);



console.log(bst.closest(25)); 


console.log(bst.isBST());