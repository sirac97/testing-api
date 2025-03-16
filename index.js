const express = require("express");
const app = express();

// Current endpoint
app.get("/", (req, res) => {
    res.send("Hello, Testing API with Update!");
});

// New endpoint
app.get("/status", (req, res) => {
    res.json({ status: "API is running smoothly", uptime: process.uptime() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});