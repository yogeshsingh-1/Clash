import express, { Application, Request, Response } from "express";
import "dotenv/config";
const app: Application = express();
const port = process.env.PORT || 8000;
app.get("/", (req: Request, res: Response) => {
  return res.send("Hey it is work");
});
app.listen(port, () => console.log("Server is running on ", port));
