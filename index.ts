import express, { Application, Request, Response } from "express";
import "dotenv/config";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

const app: Application = express();
const port = process.env.PORT || 7000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

app.get("/render", (req: Request, res: Response) => {
  return res.render("welcome");
});
app.listen(port, () => console.log(`server is running on ${port}`));