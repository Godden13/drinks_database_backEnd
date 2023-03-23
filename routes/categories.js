const express = require("express");
const CategoriesController = require("../Controllers/CategoriesController");
const Categories = require("../database/categories");
const { authApiKey, authAdmin } = require("../services/auth");
const router = express.Router();

router.get("/", authApiKey, CategoriesController.getCategory);

router.post("/", authAdmin, CategoriesController.postCategory);

router.get("/:id", authApiKey, CategoriesController.getOneCategory);

router.put("/:id", authAdmin, CategoriesController.putCategory);

router.patch("/:id", authAdmin, CategoriesController.patchCategory);

router.delete("/:id", authAdmin, CategoriesController.deleteCategory);

module.exports = router;
