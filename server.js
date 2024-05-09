const app = require("./app")
const config = require("./app/config")
const MySQL = require("./app/utils/mysql.util")

async function startServer() {
  try{
    await MySQL.connect(config.app.db)
    console.log("Connected to the database!");
    
    const PORT = config.app.port
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (err) {
    console.log("Connot connect to the database!", err)
    process.exit()
  }
}

startServer()