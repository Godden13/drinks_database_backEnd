const express = require("express");
const { getCategory, getOneCategory, postCategory, putCategory, patchCategory, deleteCategory } = require("../Controllers/CategoriesController");
const Categories = require("../database/categories");
const { authMiddleware } = require("../services/auth");
const router = express.Router();

router.get("/", getCategory);

router.post("/", postCategory);

router.get("/:id", getOneCategory);

router.put("/:id", putCategory);

router.patch("/:id", patchCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
