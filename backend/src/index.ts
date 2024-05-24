import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.json("API is running...");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
