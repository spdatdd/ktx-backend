const ApiError = require("../api-error")
const MySQL = require("../utils/mysql.util")

exports.findAll = (req, res) => {
    res.send({ message: "findAll phong handler"})
}

exports.create = (req, res, next) => {
    const { maPhong, tenPhong, maDay, maLoai, donGia, trangThai, phongNamNu, sucChua } = req.body
    const values = [maPhong, tenPhong, maDay, maLoai, donGia, trangThai, phongNamNu, sucChua]
    const sql = "INSERT INTO phong(maPhong, tenPhong, maDay, maLoai, donGia, phongNamNu, sucChua, trangThai) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    MySQL.client.query(sql, values, (error) => {
        if (error) {
            console.log(error.sqlMessage)
            return next (
                new ApiError(500, "An error occurred while creating the contact!")
            )
        } else {
            return res.send({message: "them phong thanh cong"})
        }
    })
}

exports.update = (req, res) => {
    res.send({ message: "update phong handler"})
}

exports.delete = (req, res) => {
    res.send({ message: "delete phong handler"})
}