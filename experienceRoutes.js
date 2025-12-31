const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

router.post("/submit", async (req, res) => {
  try {
    console.log("Incoming feedback:", req.body); // 👈 debug

    const exp = new Experience({
      visitorName: req.body.name,
      rating: req.body.rating,
      feedback: req.body.feedback,
      enjoyed: req.body.enjoyed,
      improvement: req.body.improvement
    });

    await exp.save();

    res.json({ success: true, message: "Feedback saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
