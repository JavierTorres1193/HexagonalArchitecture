import { UserModel } from "./UserModel";
import { UserRepository } from "../../domain/UserRepository";
import { UserId } from "../../domain/UserId";
import { User } from "../../domain/User";
import { UserUid } from "../../domain/UserUid";
import { UserEMail } from "../../domain/UserEmail";
import { UserPassword } from "../../domain/UserPassword";
import { UserCreatedAt } from "../../domain/UserCreatedAt";

export class UserORMRepository implements UserRepository {
    getUserById(id: UserId): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map(user => this.mapToDomain(user));
    }

    async getOneById(id: UserId): Promise<User | null> {
        const user = await UserModel.findByPk(id.value);
        return user ? this.mapToDomain(user) : null;
    }

    async create(user: User): Promise<void> {
        const newUser = await UserModel.create(user.mapToPrimitives());
        await this.mapToDomain(newUser);
    }

    async edit(user: User): Promise<void> {
        const [numberOfAffectedRows, [updatedUser]] = await UserModel.update(user.mapToPrimitives(), {
            where: { id: user.id.value },
            returning: true,
        });
    }

    async delete(id: UserId): Promise<void> {
        const result = await UserModel.destroy({ where: { id: id.value } });
    }

    private mapToDomain(userModel: any): User {
        return new User(
            new UserId(userModel.id),
            new UserUid(userModel.Uid),
            new UserEMail(userModel.email),
            new UserPassword(userModel.password),
            new UserCreatedAt(userModel.created_at)
        );
    }
}