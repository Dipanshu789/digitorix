import Blog from "../models/Blog.js";

export const getBlogs = async (_req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

export const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) res.json(blog);
  else res.status(404).json({ message: "Blog not found" });
};

export const createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  const blog = await Blog.create({ title, content, author });
  res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;
  blog.author = req.body.author || blog.author;
  const updated = await blog.save();
  res.json(updated);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  await blog.remove();
  res.json({ message: "Blog removed" });
};
