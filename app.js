function Stack() {
    let arr = [];
    this.push = function (item) {
        arr.push(item);
    }
    this.pop = function () {
        return arr.pop();
    }
    this.isEmpty = function () {
        return arr.length == 0;
    }
}
function Queue() {
    let pushStack = new Stack();
    let popStack = new Stack();
    this.enqueue = function (item) {
        pushStack.push(item);
    }
    this.dequeue = function () {
        if (!popStack.isEmpty()) {
            return popStack.pop();
        }
        while (!pushStack.isEmpty()) {
            popStack.push(pushStack.pop());
        }
        return popStack.isEmpty() ? "Queue is empty" : popStack.pop();
    }
}