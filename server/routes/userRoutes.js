const { signup, login } = require("../controllers/userController");
const upload = require("../middlewares/multer");

const router = require("express").Router();

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
