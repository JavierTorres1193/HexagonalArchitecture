import { Router } from "express";
import { ExpressUserController } from "./ExpressUserController";

const controller = new ExpressUserController();

const ExpressUserRouter = Router();

ExpressUserRouter.get('/user',controller.getAll);
ExpressUserRouter.get('/user/:id',controller.getById);
ExpressUserRouter.post('/user/create',controller.create);
ExpressUserRouter.put('/user/update',controller.update);
ExpressUserRouter.delete('/user/delete',controller.delete);

export {ExpressUserRouter} ;