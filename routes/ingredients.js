const express = require("express");
const { getIngredient, postIngredient, getOneIngredient, putIngredient, patchIngredient, deleteIngredient } = require("../Controllers/IngredientController");
const { authApiKey, authAdmin } = require("../services/auth");
const router = express.Router();

router.get("/", authApiKey, getIngredient);

router.post("/", authAdmin, postIngredient);

router.get("/:id", authApiKey, getOneIngredient);

router.put("/:id", authAdmin, putIngredient);

router.patch("/:id", authAdmin, patchIngredient);

router.delete("/:id", authAdmin, deleteIngredient);

module.exports = router;
