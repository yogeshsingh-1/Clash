import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.send("Hey it is work");
});
app.listen(port, () => console.log("Server is running on ", port));
