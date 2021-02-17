let user = {
    login: "Babken",
    password: "",
    validate() {
        return this.password.length > 6;
    }
}
export {
    user
}