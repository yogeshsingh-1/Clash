import express, { Application, Request, Response } from "express";
import "dotenv/config";
import ejs from "ejs";
const app: Application = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
  
  return res.send("Hey it is work");
});
app.listen(port, () => console.log("Server is running on ", port));
