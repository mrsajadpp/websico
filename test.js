const websico = require('./index');

const app = websico();

app.listen(3000, () => {
    console.log("Server started: 3000");
})

app.get('/', (req, res) => {
    res.send("hi")
})