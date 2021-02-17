var myPromiseAll = function (promises) {
    var arrayOfResolves = [];
    var completedPromises = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then(value => {
                arrayOfResolves[index] = value;
                completedPromises++;
                if (completedPromises == promises.length) {
                    resolve(arrayOfResolves);
                }
            }).catch(() => {
                completedPromises++;
            });
        });
    });
}
var promise1 = new Promise(resolve => {
    setTimeout(() => resolve("Arajin"), 3000);
});
console.log(typeof promise1.then())
/*
var promise2 = new Promise((resolve,reject) => {
    setTimeout(() => reject("Erkrord"), 1000);
});
var promise3 = new Promise(resolve => {
    setTimeout(() => resolve("Errord"), 5000);
});*/
//myPromiseAll([promise1, promise2, promise3]).then(console.log).catch(console.log);
const race = promises =>
    new Promise((res, rej) => {
        promises.forEach(p => p.then(res).catch(rej));
    });
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 4000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1