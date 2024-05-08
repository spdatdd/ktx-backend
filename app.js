const express = require("express")
const cors = require("cors")

const phongRouter = require("./app/routers/phong.route")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "welcome"})
})

app.use("/api/phong", phongRouter)

module.exports = app;