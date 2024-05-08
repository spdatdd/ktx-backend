const express = require("express")
const phong = require("../controllers/phong.controller")

const router = express.Router()

router.route("/")
  .get(phong.findAll)
  .post(phong.create)

router.route("/:id")
  .put(phong.update)
  .delete(phong.delete)

module.exports = router