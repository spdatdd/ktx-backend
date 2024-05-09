const config = {
    app: {
        port: process.env.PORT || 3000,
        db: {
            host: "localhost",
            user: "root",
            password: "",
            database: 'ky_tuc_xa'
        },
    }
}

module.exports = config