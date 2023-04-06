var express = require('express');

const { authMiddleware, authApiKey } = require('../services/auth');
const UserController = require('../Controllers/UserController');
var router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email_address
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         first_name:
 *           type: string
 *           description: The firstName of the user
 *         last_name:
 *           type: string
 *           description: The lasttName of the user
 *         email_address:
 *           type: string
 *           description: The password of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         is_admin:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the book was updated
 *       example:
 *         id: 1
 *         first_name: Rash
 *         last_name: Lahfen
 *         email_address: rash237@gmail.com
 *         is_admin: false
 *         password: rashking
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */




/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */


router.get("/", authMiddleware, UserController.getUsers);

router.post("/", UserController.postUser)

router.get("/:id", authMiddleware, UserController.getOneUser);

router.put("/:id", authMiddleware, UserController.putUser)

router.patch("/:id", authMiddleware, UserController.patchUser)

router.delete("/:id", authMiddleware, UserController.deleteUser);

module.exports = router;
