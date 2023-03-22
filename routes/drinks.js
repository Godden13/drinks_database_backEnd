const express = require("express");
const { getDrinks, postDrinks, getOneDrink, putDrink, patchDrink, deleteDrink } = require("../Controllers/DrinkControllers");
// const authenticateKey = require("../services/apiAuth");
// const { authMiddleware } = require("../services/auth");
const router = express.Router();


router.get("/", getDrinks );

router.post("/", postDrinks);

router.get("/:id", getOneDrink);

router.put("/:id", putDrink);

router.patch("/:id", patchDrink);

router.delete("/:id", deleteDrink);

module.exports = router;
