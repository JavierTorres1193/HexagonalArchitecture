import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../Shared/Infrastructure/ServiceContainer";
import { UserNotFoundError } from "../domain/UserNotFoundError";

export class ExpressUserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await ServiceContainer.user.getAll.run();

      return res.json(users.map((user) => user.mapToPrimitives())).status(200);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // Convertir req.params.id a número
      const id = Number(req.params.id);

      // Validar que sea un número válido
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const user = await ServiceContainer.user.getById.run(id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json(user.mapToPrimitives());
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
  
      next(error);
    }
}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
        console.log("esto tiene el req.body", req.body);
        
      const { id,Uid, email,password, createdAt } = req.body as {
        id: number;
        Uid: string;
        email: string;
        password: string;
        createdAt: string;
      };
      await ServiceContainer.user.create.run(
        id,
        Uid,
        email,
        password,
        new Date(createdAt),
      );

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { createdAt, email, id, Uid,password,idTypeState } = req.body as {
        id: number;
        Uid: string;
        email: string;
        password: string;
        idTypeState: number;
        createdAt: string;
      };
      
      await ServiceContainer.user.create.run(
        id,
        Uid,
        email,
        password,
        new Date(createdAt),
      );

      return res.status(204).send();
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      // Validar que sea un número válido
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }


      await ServiceContainer.user.delete.run(id);

      return res.status(204).send();
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
