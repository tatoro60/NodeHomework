function myPromisify(callBack) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            callBack(...args, (err, data) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(data);
                }
            })
        })
    }
}