import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sql from "mssql";
import { config } from "../dbFiles/dbConfig";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/api", async (req: Request, res: Response) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM shop.Product`;

    res.json(result.recordset);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
