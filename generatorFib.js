function* fibonacci() {
    let previous = 0;
    let current = 1;
    let nextNumber = previous + current;
    while (true) {
        previous = current;
        current = nextNumber;
        nextNumber = previous + current;
        yield current;
    }
}

for (const n of fibonacci(10)) {
    if (n > 100) {
        break;
    }
    console.log(n);
}