const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
    const UrlParam = (new URL(req.url, `http://${req.headers.host}`).searchParams).get("code")

    if(UrlParam === "gebak2022" && req.method === "POST"){
        fs.readFile('brief.txt',(err,data)=>{
            res.writeHead(200);
            res.end(data);
        })    
    } else{
        res.writeHead(200);
        res.end(process.env);
    }
}

const server = http.createServer(requestListener);
server.listen(80);
server.listen(443);
