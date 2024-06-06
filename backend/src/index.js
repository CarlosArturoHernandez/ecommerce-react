import app from "./app.js"

const hostname = '127.0.0.1';
const port = 4000;

app.get('/', function (req, res) {
    res.send('Hello World')
  })


app.listen(port)

console.log(`Server running at http://${hostname}:${port}/`)