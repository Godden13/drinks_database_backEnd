const express = require("express");
const DrinkControllers = require("../Controllers/DrinkControllers");
const { authAdmin, authApiKey } = require("../services/auth");
const router = express.Router();


router.get("/", authApiKey, DrinkControllers.getDrinks );

router.post("/", authAdmin, DrinkControllers.postDrinks);

router.get("/:id", authApiKey, DrinkControllers.getOneDrink);

router.put("/:id", authAdmin, DrinkControllers.putDrink);

router.patch("/:id", authAdmin, DrinkControllers.patchDrink);

router.delete("/:id", authAdmin, DrinkControllers.deleteDrink);

module.exports = router;
