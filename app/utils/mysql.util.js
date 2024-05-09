const mysql = require('mysql');

class MySQL {
  static connect = async (obj) => {
    if (this.client) return this.client
    this.client = mysql.createConnection(obj);
    await this.client.connect()
    return this.client
  }
}

module.exports = MySQL