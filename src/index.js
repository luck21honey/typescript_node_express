import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.json('API is working')
})

app.listen(8000, () => {
    console.log("server started at http://localhost:8000")
})