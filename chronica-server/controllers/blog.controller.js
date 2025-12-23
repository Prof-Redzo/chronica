import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    author: req.user.id,
  });

  res.status(201).json(blog);
};

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find()
    .populate("author", "name")
    .sort({ createdAt: -1 });

  res.json(blogs);
};
