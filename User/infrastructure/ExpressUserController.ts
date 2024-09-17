import { Request, Response } from "express";
import { ServiceContainer } from "../../Shared/Infrastructure/ServiceContainer";
import { UserNotFoundError } from "../domain/UserNotFoundError";

type requestBody = {
    id: string,
    name: string,
    email: string,
    createdAt: Date,
}

export class ExpressUserController {
    async getAll(req: Request, res: Response) {
        const users = await ServiceContainer.user.getAll.run();
        return res.json(users).status(200);
    };

    async getById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            const user = await ServiceContainer.user.getById.run(id);

            return res.json(user).status(200);
            
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return res.status(400).json({message:error.message})
            }
            throw error;
        }
    };

    async create(req:Request<requestBody>, res: Response) {
        const {id, email,name,createdAt} = req.body;
        try {
            await ServiceContainer.user.create.run(
                id,
                name,
                email,
                new Date(createdAt)
            );
            return res.status(201).json({message: 'User created successfully'})
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    };

    async update (req:Request<requestBody>, res: Response) {
        const {id, email,name,createdAt} = req.body;
        try {
            await ServiceContainer.user.update.run(
                id,
                name,
                email,
            );
            return res.status(204).json({message: 'User update successfully'})
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    };

    async delete(req:Request, res: Response) {
        const id = req.params.id;
        try {
            await ServiceContainer.user.delete.run(id);
            return res.status(204).json({message: 'User deleted successfully'})
            } 
        catch (error) {
            return res.status(400).json({message:error.message})
            }
    }



}