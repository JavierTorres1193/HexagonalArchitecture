import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { ExpressUserRouter } from "./lib/User/infrastructure/ExpressUserRouter";
import { sequelize } from "./lib/Shared/Infrastructure/config/sequalize"; // Importa sequelize


const app = express();

app.use(express.json());

app.use(ExpressUserRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error(err.stack);
    return res.status(500).json({ message: err.message });
  }
  console.error(err);
  return res.status(500).json({ message: "Something went wrong" });
});

sequelize.sync({ force: true, alter: true }) // 'force: false' no elimina ni recrea las tablas
  .then(() => {
    console.log("Database synchronized");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
