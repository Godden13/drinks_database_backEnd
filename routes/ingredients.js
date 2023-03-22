const express = require("express");
const { getIngredient, postIngredient, getOneIngredient, putIngredient, patchIngredient, deleteIngredient } = require("../Controllers/IngredientController");
const router = express.Router();

router.get("/", getIngredient);

router.post("/", postIngredient);

router.get("/:id", getOneIngredient);

router.put("/:id", putIngredient);

router.patch("/:id", patchIngredient);

router.delete("/:id", deleteIngredient);

module.exports = router;
