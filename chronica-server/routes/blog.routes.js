import express from "express";
import { createBlog, getBlogs } from "../controllers/blog.controller.js";
import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", protect, adminOnly, createBlog);

export default router;
