const sqlite3 = require("sqlite3")//drive responsável pelo funcionamento
const sqlite = require("sqlite")//resposável por conectar
const path = require("path")

async function sqlConnection(){
  const database = await sqlite.open({
    filename : path.resolve(__dirname, "..", "database.db"),
    driver : sqlite3.Database
  })

  return database
}

module.exports = sqlConnection