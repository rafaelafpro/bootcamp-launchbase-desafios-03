// Importação "Require" das dependencias
const express = require('express');
const nunjucks = require('nunjucks');

const courses = require('./data');

// criacao do servidor com express function
const server = express();

// declaracao da pasta de uses (css, js)
server.use(express.static('public'))

// declaracao da view engine do nunjucks
server.set("view engine", "njk");

// configuração nunjucks
nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false
})

// rotas
server.get("/", function (req, res) {
    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
    return res.render ("courses", {courses});
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    
    const course = courses.find(function(course){
        return course.id == id;
    })

    if (!course) {
        res.send('Course not found!');
    }

    res.render ("course", {course} );
});

server.get("/about", function (req, res) {
    server.use(function(req, res) {
        res.status(404).render("not-found");
      });
    return res.render ("about");
})



// porta
server.listen(5000, function(){
    console.log("server is running");
});


