exports.getHome = (req, res, next) => {
    res.render("public/home", {
        pageTitle: "Home",
    });
};

exports.getProducts = (req, res, next) => {
    res.render("public/products", {
        pageTitle: "All Products"
    })
}
