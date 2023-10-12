const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// mddleware
app.use(cors());

const users = [
    {id: 1, name: "jonake", email: "jonake@gmail.com"},
    {id: 1, name: "lojoke", email: "lojoke@gmail.com"},
    {id: 1, name: "nondene", email: "nondene@gmail.com"}
]

app.get('/', (req, res) => {
    res.send('Users  Management server is running nodemone')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})