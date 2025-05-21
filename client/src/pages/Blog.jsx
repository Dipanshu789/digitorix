import { useEffect, useState } from "react";
import axios from "axios";
// ...existing code...
import BlogCard from "../components/BlogCard";
// ...existing code...

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/blogs`)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Latest Blogs</h2>
      {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  );
}
