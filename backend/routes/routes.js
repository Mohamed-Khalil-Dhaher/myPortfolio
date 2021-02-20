const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/contact");

router.post("/signup", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.name,
    email: req.body.email,
    password: req.body.comment
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/signup", (req, res) => {
  signUpTemplateCopy
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.put("/signup/:_id", (req, res) => {
  console.log(req.body, typeof req.params._id);
  signUpTemplateCopy
    .findByIdAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((result) => {
      res.send(result);
    });
});

router.delete("/signup/:_id", (req, res) => {
  signUpTemplateCopy.deleteOne({ _id: req.params._id }, (err, docs) => {
    res.send(docs);
    res.end();
  });
});

module.exports = router;
