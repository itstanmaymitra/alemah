require("dotenv").config({
    path: "./config/config.env",
});

// Import packages and modules
const path = require("path");

const express = require("express");

// Import Models

// Environment Variables
const PORT = process.env.PORT || 5000;

// initialize app
const app = express();

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", "views");

// Routes import
const publicRoutes = require("./routes/public");

// Middleware for bodyparser and express Static
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, "public")));

// MongoDBSession init and Middleware for session

// Initialize Connect-flash

// Routes Using
app.use(publicRoutes);

// Page not found(404)
app.use((req, res, next) => {
    res.status(404).render("error/404", {
        pageTitle: "404 Page not found.",
    });
});

// Error Handling Middleware

// server Run
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on PORT ${PORT}`);
    }
});
