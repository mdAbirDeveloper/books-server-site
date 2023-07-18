import express, { Application, Response, Request } from "express";
import cors from "cors";
import router from "./routes/index";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

// const jushtCheck = async () => {
//   app.get("/books", async (req: Request, res: Response) => {
//     res.send("this is the server side");
//   });
// };

// jushtCheck();

export default app;
