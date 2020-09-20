var fs = require('fs')

// var readStream = fs.createReadStream('file.txt', 'utf8')

// var writeStream = fs.createWriteStream('write_file.txt')

// readStream.on('data', function(chunk) {
//     console.log('-------------------------------------------------')
//     writeStream.write(chunk)
// })

// readStream.on('end', function (chunk) {
//     console.log('--------------------end------------------')
// })
var http = require('http')

// readStream.pipe(writeStream)

http.createServer(function(req, res) {
    console.log('requested url : ' + req.url)
    if (req.url === '/home' || req.url === '/')
    {
        res.writeHead(200, {
            'Content-Type' : 'text/html'
            // 'Content-Type' : 'application/json'
        })
        fs.createReadStream('index.html', 'utf8').pipe(res)
    } else if (req.url === '/api') {
        res.writeHead(200, {
            // 'Content-Type' : 'text/html'
            'Content-Type' : 'application/json'
        })
        // var readStream = fs.createReadStream('index.html', 'utf8')
        var jsonObj = {
            name    : 'max',
            surname : 'paijo ok',
            age     : 26
        }
        // readStream.pipe(res)
        res.end(JSON.stringify(jsonObj))

    } else {
        res.writeHead(200, {
            'Content-Type' : 'text/html'
            // 'Content-Type' : 'application/json'
        })
        var readStream = fs.createReadStream('404.html', 'utf8')
        readStream.pipe(res)
    }
    
}).listen(3000)

console.log("server is running on http://localhost:3000")