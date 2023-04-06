const express = require("express");
const DrinkControllers = require("../Controllers/DrinkControllers");
const { authAdmin, authApiKey, authMiddleware } = require("../services/auth");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the category was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the category was updated
 *       example:
 *         id: 1
 *         name: Whiskey
 *         description: Gives a warm and burning sensation on your chest
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */


router.get("/", authApiKey, DrinkControllers.getDrinks );

router.post("/", authMiddleware, authAdmin, DrinkControllers.postDrinks);

router.get("/:id", authApiKey, DrinkControllers.getOneDrink);

router.put("/:id", authMiddleware, authAdmin, DrinkControllers.putDrink);

router.patch("/:id", authMiddleware, authAdmin, DrinkControllers.patchDrink);

router.delete("/:id", authMiddleware, authAdmin, DrinkControllers.deleteDrink);

module.exports = router;
