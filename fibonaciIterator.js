const fibonacci = {
    [Symbol.iterator]: () => {
        let prev = 0;
        let curr = 1;
        let nextNumber = prev + curr;
        return {
            next() {
                prev = curr;
                curr = nextNumber;
                nextNumber = prev + curr;
                return {
                    value: curr,
                    done: false
                };

            }
        };
    }
};


for (let n of fibonacci) {
    if (n > 100) {
        break
    }
    console.log(n);
}