// require('events').EventEmitter.defaultMaxListeners = 15
// //require('events').EventEmitter.prototype._maxListeners = 100;
// //You might use require('events').defaultMaxListeners = 15; directly. – 
// //when you get max error event you can use any of the above

//to import express
const express = require('express');
const morgan = require('morgan');

// to import models
const User = require('./models/user');

const blogRoutes = require('./routes/blogRoutes.js');

//when importing querystring without express
//const query = require('node:querystring');

const app = express();

//middleware
app.use(express.json());

app.use(morgan('dev'));

//to be able to grab data
app.use(express.urlencoded({extended: true}));

app.use('/blogs', blogRoutes);
//app.use(blogRoutes);

const port = process.env.PORT || 3335;

//to import mongoose
const mongoose = require('mongoose');

//mongo url
// const mongoURL = "mongodb+srv://KateM:kathleen7mpos@cluster0.8pum1la.mongodb.net/USEBLOG?retryWrites=true";
const mongoURL = "mongodb://127.0.0.1:27017/USEBLOG?retryWrites=true"
//connect mongoose to express server
mongoose.connect(mongoURL).then((result) => {
    if(result) console.log('Connection Successful');
    else console.log('connection unsuccessful');
}).catch((error) => {
    console.log(error)
})

// static files
app.use(express.static('public'));

//to use ejs in your code
app.set('view engine', 'ejs');
//to change folder name from views to pages
//app.set('views', 'pages')

//   const blogs = [
//         {
//             title: 'Good day',
//             description: 'Today is a good day'
//         },
//         {
//             title: 'Holiday tomorrow',
//             description: 'Yet another'
//         },
//         {
//             title: 'Day',
//             description: 'Today is a good day'
//         }
//     ];

//using get with ejs
app.get('/about', (req, res) => {
    res.render('about', { title: 'The about page'});
})
// app.get('/home', (req, res) => {
//     res.render('home', { title: 'The home page' });
// })

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

app.get('/', (req, res) => {
    res.redirect('/blogs')
});

// catch all
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page not found'})
});


app.listen(port, () => console.log(`Server runs on port ${port}`));
