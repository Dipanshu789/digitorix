import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">By {blog.author}</Card.Subtitle>
        <Card.Text>{blog.content.slice(0, 100)}...</Card.Text>
        <Button as={Link} to={`/blog/${blog._id}`} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}
