const express = require("express");
const GlassController = require("../Controllers/GlassController");
const { authApiKey, authAdmin, authMiddleware } = require("../services/auth");
const router = express.Router();

router.get("/", authApiKey, GlassController.getGlasses);

router.post("/", authMiddleware, authAdmin, GlassController.postGlass);

router.get("/:id", authApiKey, GlassController.getOneGlass);

router.put("/:id", authMiddleware, authAdmin, GlassController.putGlass);

router.patch("/:id", authMiddleware, authAdmin, GlassController.patchGlass);

router.delete("/:id", authMiddleware, authAdmin, GlassController.deleteGlass);

module.exports = router;
