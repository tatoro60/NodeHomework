function Node(item) {
    this.item = item;
    this.next = null;
}
function LinkedList() {
    let root = null;
    let lastElement = null;
    let size = 0;
    this.addLast = function (num) {
        if (root == null) {
            root = new Node(num);
            lastElement = root;
        } else {
            lastElement.next = new Node(num);
            lastElement = lastElement.next;
        }
        size++;
    }
    this.addFirst = function (num) {
        let node = new Node(num)
        node.next = root;
        root = node;
        size++;
    }
    this.addByIndex = function (index, item) {
        if (index > size) {
            console.log("Index is out of range");
        }
        else if (index == 0) {
            this.addFirst(item);
        } else if (index == size) {
            this.addLast(item);
        }
        else {
            let current = root;
            let newNode =new  Node(item);
            while(index != 1){
                current = current.next;
                index--;
            }
            newNode.next = current.next;
            current.next = newNode;
            size++;
        }
    }
    this.removeFirst = function () {
        root = root.next;
        size--;
    }
    this.removeLast = function () {
        this.removeByIndex(size - 1);
    }
    this.removeByIndex = function (index) {
        if (index >= size) {
            console.log("Index is out of range");
        }
        else if (index == 0) {
            this.removeFirst();
        }
        else {
            let current = root;
            while (index != 1) {
                current = current.next;
                index--;
            }
            current.next = current.next.next;
            size--;
        }

    }
    this.removeByItem = function (item) {
        if (root.item == item) {
            this.removeFirst();
        }
        else {
            let current = root;
            while (current.next != null) {
                if (item == current.next.item) {
                    current.next = current.next.next;
                    size--;
                    return;
                }
                current = current.next;
            }
            console.log(`The item ${item} is not in the linked list`);
        }
    }
    this.printLinkedList = function () {
        let currentNode = root;
        while (currentNode != null) {
            console.log(currentNode.item);
            currentNode = currentNode.next;
        }
    }
    Object.defineProperty(this, "size", {
        get() { return size; }
    })
}