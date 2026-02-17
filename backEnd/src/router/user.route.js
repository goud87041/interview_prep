import register from "../controller/user.controller.js"


const { Router } = require("express");

const router = Router()

const register = router.route("/register").get(register)