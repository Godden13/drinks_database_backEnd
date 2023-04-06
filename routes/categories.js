const express = require("express");
const CategoriesController = require("../Controllers/CategoriesController");
const { authApiKey, authAdmin, authMiddleware } = require("../services/auth");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the category was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the category was updated
 *       example:
 *         id: 1
 *         name: Whiskey
 *         description: Gives a warm and burning sensation on your chest
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */


/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The categories managing API
 * /categories:
 *   get:
 *     summary: Lists all the categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 * /categories/{id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/category'
 *       404:
 *         description: The category was not found
 *   put:
 *    summary: Update the category by the id
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: The category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: The category was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */

router.get("/", authApiKey, CategoriesController.getCategory);

router.post("/", authMiddleware, authAdmin, CategoriesController.postCategory);

router.get("/:id", authApiKey, CategoriesController.getOneCategory);

router.put("/:id", authMiddleware, authAdmin, CategoriesController.putCategory);

router.patch("/:id", authMiddleware, authAdmin, CategoriesController.patchCategory);

router.delete("/:id", authMiddleware, authAdmin, CategoriesController.deleteCategory);

module.exports = router;
