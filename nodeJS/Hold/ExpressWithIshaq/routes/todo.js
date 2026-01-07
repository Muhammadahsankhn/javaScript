const express = require("express");
const { addTodo, getAllTodos, markAsDone } = require("../controller/todo"); // ✅ include markAsDone
const router = express.Router();

// GET /todo/
router.get('/', (req , res) => {
    res.render("todo", { todo: getAllTodos() });
});

// POST /todo/add
router.post("/add", (req, res) => {
    addTodo(req.body.data);
    res.send("Todo Added!");
});

// ✅ POST /todo/mark-done/:index
router.post("/mark-done/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (!isNaN(index)) {
        markAsDone(index);
        res.json({ success: true });
    } else {
        res.status(400).json({ success: false, message: "Invalid index" });
    }
});

module.exports = router;
