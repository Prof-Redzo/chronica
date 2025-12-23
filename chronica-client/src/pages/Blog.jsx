import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const API_URL = "http://localhost:5000/api/blogs";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // 🔽 FETCH BLOGS
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API_URL);
      setBlogs(res.data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✍️ CREATE BLOG
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      setLoading(true);

      const res = await axios.post(
        API_URL,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlogs([res.data, ...blogs]);
      setTitle("");
      setContent("");
    } catch (error) {
      alert("You must be logged in as admin to publish blogs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100vw", py: 8, px: 6 }}>
      <Typography variant="h3" gutterBottom>
        History Blog
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Write your own historical articles and reflections.
      </Typography>

      {/* ✍️ BLOG FORM (ONLY IF LOGGED IN) */}
      {token && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: 800, mb: 6 }}
        >
          <TextField
            label="Blog title"
            fullWidth
            sx={{ mb: 3 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label="Blog content"
            multiline
            rows={6}
            fullWidth
            sx={{ mb: 3 }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish"}
          </Button>
        </Box>
      )}

      {!token && (
        <Typography color="error" sx={{ mb: 6 }}>
          Login required to publish blog posts.
        </Typography>
      )}

      {/* 📜 BLOG LIST */}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={6} key={blog._id}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {blog.title}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  sx={{ mb: 2 }}
                >
                  {new Date(blog.createdAt).toLocaleDateString()}
                </Typography>

                <Typography variant="body2">
                  {blog.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
