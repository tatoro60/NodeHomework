const http = require("http");
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write("Barev ara");
        response.end();
    } else {
        response.write("Hajox valodik");
        response.end();
    }
});
server.listen("32");