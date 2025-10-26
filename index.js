const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Hello endpoint
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Node.js app. Visit /hello for a greeting!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Visit http://localhost:${PORT}/hello to test the hello endpoint`
  );
});
