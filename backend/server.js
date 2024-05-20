require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/hello', (req, res) => {
res.json(["Hello"]);
});
app.listen(process.env.PORT, () => {
console.log("Server is listening on port %s", process.env.PORT);
});
