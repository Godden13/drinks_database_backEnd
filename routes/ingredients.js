const express = require("express");
const { getIngredient, postIngredient, getOneIngredient, putIngredient, patchIngredient, deleteIngredient } = require("../Controllers/IngredientController");
const { authApiKey, authAdmin, authMiddleware } = require("../services/auth");
const router = express.Router();

router.get("/", authApiKey, getIngredient);

router.post("/", authMiddleware, authAdmin, postIngredient);

router.get("/:id", authApiKey, getOneIngredient);

router.put("/:id", authMiddleware, authAdmin, putIngredient);

router.patch("/:id", authMiddleware, authAdmin, patchIngredient);

router.delete("/:id", authMiddleware, authAdmin, deleteIngredient);

module.exports = router;
