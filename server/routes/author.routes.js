const authorController = require("../controllers/author.controller");

module.exports = app => {
    app.post("/api/authors", authorController.create);
    app.get("/api/authors", authorController.getAll);
    app.get("/api/authors/:id", authorController.getOne);
    app.delete("/api/authors/:id", authorController.deleteOne);
    app.put("/api/authors/:id", authorController.updateOne);
}