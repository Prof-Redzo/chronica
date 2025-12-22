import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    const newBlog = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setContent("");
  };

  return (
    <Box sx={{ width: "100vw", py: 8, px: 6 }}>
      <Typography variant="h3" gutterBottom>
        History Blog
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Write your own historical articles and reflections.
      </Typography>

      {/* BLOG FORM */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 800,
          mb: 6,
        }}
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

        <Button variant="contained" type="submit">
          Publish
        </Button>
      </Box>

      {/* BLOG LIST */}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={6} key={blog.id}>
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
                  Published on {blog.date}
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
