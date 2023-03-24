const express = require("express");
const CategoriesController = require("../Controllers/CategoriesController");
const { authApiKey, authAdmin, authMiddleware } = require("../services/auth");
const router = express.Router();

router.get("/", authApiKey, CategoriesController.getCategory);

router.post("/", authMiddleware, authAdmin, CategoriesController.postCategory);

router.get("/:id", authApiKey, CategoriesController.getOneCategory);

router.put("/:id", authMiddleware, authAdmin, CategoriesController.putCategory);

router.patch("/:id", authMiddleware, authAdmin, CategoriesController.patchCategory);

router.delete("/:id", authMiddleware, authAdmin, CategoriesController.deleteCategory);

module.exports = router;
