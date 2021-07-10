const { signup, login } = require("../controllers/userController");

const router = require("express").Router();

/*
 *@swagger
 * /user/signup:
 *  post:
 *    description :create new user
 * parameters:
 *  -username:name of the user
 *   email:email of the user
 *   password: password of the user
 *   in :formData
 *   type :String
 * responses:
 *    201:
 *      description:created
 *
 *
 */

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
