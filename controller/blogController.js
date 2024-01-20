const Blog = require('./../models/blog');

const getAllBlogs = async (req, res) => {
    //to make input data appear on homepage
    try {
        const results = await Blog.find();
        res.render('home', { title: 'Home', blogs: results});
    } catch(error) {
        res.status(500).send(error)
    }
}

const addBlog = async (req, res) => {
    //console.log(req.body);
    const { title, description, body } =req.body;
    const blog = new Blog({
        title, 
        description, 
        body
    });
    try {
        const results = await blog.save();
        if(results) res.redirect('/');
    } catch (error) {
        res.status(500).send(error)
    }
}

const createBlog = (req, res) => {
    res.render('create', { title: 'Create a blog' });
}

const fetchBlog = async(req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        res.render('details', {title:'Blog Details', blog: blog});
        //res.send(blog);
    } catch(error) {
        res.status(500).send(error);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const result = await Blog.findByIdAndDelete(req.params.id)
        if(result) res.status(200).json({msg: "Delete success", redirect: "/"})
    } catch(error) {
        res.status(500).send(error)
    }
  
}

module.exports = {
    getAllBlogs,
    addBlog,
    createBlog,
    fetchBlog,
    deleteBlog
}