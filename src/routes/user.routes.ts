// import { Router } from "express";

// import * as userController from "../controllers/users.controller.js";

// const router = Router();

// router.get("/", userController.getUsers);

// router.get("/:id", userController.getUser);

// router.post("/", userController.createUser);

// router.delete("/:id", userController.deleteUser);

// export default router;

import { Router } from "express";

import * as userController from "../controllers/users.controller.js";

const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     description: Returns a list of all users.
 *     responses:
 *       200:
 *         description: List of users returned successfully.
 */
router.get("/", userController.getUsers);

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a user by ID
 *     description: Returns a single user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found.
 *       404:
 *         description: User not found.
 */
router.get("/:id", userController.getUser);

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     description: Creates a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - roleId
 *               - companyId
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Ahmed
 *               lastName:
 *                 type: string
 *                 example: Khan
 *               email:
 *                 type: string
 *                 format: email
 *                 example: ahmed@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Password@123
 *               roleId:
 *                 type: integer
 *                 example: 1
 *               companyId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 firstName:
 *                   type: string
 *                   example: Ahmed
 *                 lastName:
 *                   type: string
 *                   example: Khan
 *                 email:
 *                   type: string
 *                   example: ahmed@example.com
 *                 roleId:
 *                   type: integer
 *                   example: 1
 *                 companyId:
 *                   type: integer
 *                   example: 1
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Invalid request body.
 *       500:
 *         description: Internal server error.
 */
router.post("/", userController.createUser);




/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user
 *     description: Deletes a user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 */
router.delete("/:id", userController.deleteUser);

export default router;
