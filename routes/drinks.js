const express = require("express");
const DrinkControllers = require("../Controllers/DrinkControllers");
const { authAdmin, authApiKey, authMiddleware } = require("../services/auth");
const router = express.Router();


router.get("/", authApiKey, DrinkControllers.getDrinks );

router.post("/", authMiddleware, authAdmin, DrinkControllers.postDrinks);

router.get("/:id", authApiKey, DrinkControllers.getOneDrink);

router.put("/:id", authMiddleware, authAdmin, DrinkControllers.putDrink);

router.patch("/:id", authMiddleware, authAdmin, DrinkControllers.patchDrink);

router.delete("/:id", authMiddleware, authAdmin, DrinkControllers.deleteDrink);

module.exports = router;
