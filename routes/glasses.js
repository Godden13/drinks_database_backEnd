const express = require("express");
const { getGlasses, postGlass, getOneGlass, putGlass, patchGlass, deleteGlass } = require("../Controllers/GlassController");
const { authApiKey, authAdmin } = require("../services/auth");
const router = express.Router();

router.get("/api", authApiKey, getGlasses);

router.post("/api", authAdmin, postGlass);

router.get("/api:id", authApiKey, getOneGlass);

router.put("/api:id", authAdmin, putGlass);

router.patch("/api:id", authAdmin, patchGlass);

router.delete("/api:id", authAdmin, deleteGlass);

module.exports = router;
