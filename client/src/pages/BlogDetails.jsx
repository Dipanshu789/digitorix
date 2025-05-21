import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{blog.title}</h2>
      <p><em>By {blog.author}</em></p>
      <p>{blog.content}</p>
    </div>
  );
}
