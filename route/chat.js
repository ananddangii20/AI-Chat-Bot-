const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const usermsg = req.body.message;

    if (!usermsg) {
      return res.json({ reply: "No message received" });
    }

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: usermsg }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Send back AI response as JSON
    res.json({ reply: response.data.choices[0].message.content });

  } catch (error) {
    console.error("OpenAI API error:", error.response ? error.response.data : error.message);
    res.status(500).json({ reply: "Server error, please try again." });
  }
});

module.exports = router;
