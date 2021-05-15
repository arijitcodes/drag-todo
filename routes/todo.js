const router = require("express").Router();

// Model
const Todo = require("../models/Todo");

// Routes

// @route   GET api/todo
// @desc    Get all the Todos
// @access  Public
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    /* if (!todos || todos.length <= 0) {
      return res.send("Blank");
    } */
    return res.json(todos);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
});

// @route   POST api/todo
// @desc    Post and Create a new Todo
// @access  Public
router.post("/", (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err, todo) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: "Failed to save Todo Item!" });
    } else {
      return res.json(todo);
    }
  });
});

// @route   DELETE api/todo/:id
// @desc    Deletet Specific Todo with Id in Parameter
// @access  Public
router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err, todo) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ err: "Failed to Delete Todo Item!" });
    } else {
      return res.json(todo);
    }
  });
});

module.exports = router;
