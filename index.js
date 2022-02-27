const http = require('http');


const message = `
hallo,

wat leuk dat je de moeite heb gedaan om het commando over te typen uit de doos. 


`

const kaas = ``

const requestListener = function (req, res) {
    const UrlParam = (new URL(req.url, `http://${req.headers.host}`).searchParams).get("code")

    if(UrlParam === "gebak2022" || req.method === "POST"){
    // console.log(params)
    res.writeHead(200);
    res.end(message);
    }
}

const server = http.createServer(requestListener);
server.listen(9000);
