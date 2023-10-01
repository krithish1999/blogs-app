// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Create a new blog
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.redirect('/blogs');
  } catch (err) {
    console.error(err);
    res.send('Error creating a new blog.');
  }
});

// View all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.render('index', { blogs });
  } catch (err) {
    console.error(err);
    res.send('Error fetching blogs.');
  }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      res.redirect('/blogs');
    } catch (err) {
      console.error(err);
      res.send('Error deleting the blog.');
    }
});

module.exports = router;
