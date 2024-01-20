//to import express
const express = require('express');

//to import the controller
const blogController = require('./../controller/blogController');

const router = express.Router();

router.get('/', blogController.getAllBlogs);

router.post('/', blogController.addBlog);

router.get('/create', blogController.createBlog);

//when you click on title/description to get the full data
router.get("/:id", blogController.fetchBlog);

//to delete a blog
router.delete('/:id', blogController.deleteBlog);

module.exports = router;