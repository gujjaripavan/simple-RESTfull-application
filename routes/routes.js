const express = require("express");
const router = express.Router();
const Model = require("../Model/models");

//GET ALL API
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//GET A API
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//POST API
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//PUT API
router.put("/put", (req, res) => {
  res.send("PUT Method");
});

//DELETE API
router.delete("/delete", (req, res) => {
  res.send("DELETE Method");
});

module.exports = router;
