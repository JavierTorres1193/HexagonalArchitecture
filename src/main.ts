import Express from "express";
import { Request, Response, NextFunction } from "express";
import { ExpressUserRouter } from "./lib/User/infrastructure/ExpressUserRouter";

const app = Express();

app.use(Express.json());

app.use(ExpressUserRouter);

app.use((req, res, next) => {
    console.log("Middleware: Parsed body:", req.body);
    next();
  });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});