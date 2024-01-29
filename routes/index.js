// Stephanie Santos | 301348833 | 01.27.2024 
const express = require("express");
const {
  homeContent,
  aboutMeContent,
  projectsContent,
  servicesList,
} = require("../public/javascripts/data");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("pages/index", { content: homeContent });
});
// about page
router.get("/about", function (req, res) {
  res.render("pages/about", { content: aboutMeContent });
});

//contact
router.get("/contact", function (req, res) {
  res.render("pages/contact");
});
router.post("/contact", function (req, res) {
    // Extract form data from the request body
    const form = req.body;
    console.log(form)
  
    // Redirect to the home page
    res.redirect("/");
  });
//project
router.get("/projects", function (req, res) {
  res.render("pages/project", { content: projectsContent });
});

//services
router.get("/services", function (req, res) {
  res.render("pages/services", { content: servicesList });
});

module.exports = router;
