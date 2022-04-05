const http = require('http')

const serve = http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.url === '/users') {
        const users = [
            {
                name: 'xy',
                id: 1
            },
            {
                name: 'xy333',
                id: 2
            }
        ]
        return res.end(JSON.stringify(users))
    }
    return  res.end('NOT FOUND')
})

serve.listen('3000', () => {
    console.log('服务器启动在http://localhost:3000端口')
})