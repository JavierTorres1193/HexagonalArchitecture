import { UserModel } from "./UserModel";
import { UserRepository } from "../../domain/UserRepository";
import { UserId } from "../../domain/UserId";
import { User } from "../../domain/User";
import { UserUid } from "../../domain/UserUid";
import { UserEMail } from "../../domain/UserEmail";  // Corregido nombre de importación
import { UserPassword } from "../../domain/UserPassword";
import { UserCreatedAt } from "../../domain/UserCreatedAt";

export class UserORMRepository implements UserRepository {

    async getUserById(id: UserId): Promise<User | null> { // Renombrado a getUserById
        const user = await UserModel.findByPk(id.value);
        return user ? this.mapToDomain(user) : null;
    }

    async update(user: User): Promise<void> { // Renombrado a update
        await UserModel.update(user.mapToPrimitives(), {
            where: { id: user.id.value },
            returning: true,
        });
    }

    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map(user => this.mapToDomain(user));
    }

    async create(user: User): Promise<void> {
        await UserModel.create(user.mapToPrimitives());
    }

    async delete(id: UserId): Promise<void> {
        await UserModel.destroy({ where: { id: id.value } });
    }

    private mapToDomain(userModel: any): User {
        return new User(
            new UserId(userModel.id),
            new UserUid(userModel.Uid),
            new UserEMail(userModel.email), // Corregido aquí también
            new UserPassword(userModel.password),
            new UserCreatedAt(userModel.created_at)
        );
    }
}
