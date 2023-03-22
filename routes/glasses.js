const express = require("express");
const { getGlasses, postGlass, getOneGlass, putGlass, patchGlass, deleteGlass } = require("../Controllers/GlassController");
const router = express.Router();

router.get("/api", getGlasses);

router.post("/api", postGlass);

router.get("/api:id", getOneGlass);

router.put("/api:id", putGlass);

router.patch("/api:id", patchGlass);

router.delete("/api:id", deleteGlass);

module.exports = router;
