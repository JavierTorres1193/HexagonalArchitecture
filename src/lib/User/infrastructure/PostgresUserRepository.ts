import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserCreatedAt } from "../domain/UserCreatedAt";
import { UserEMail } from "../domain/UserEmail";
import { UserModel } from "../../Shared/Infrastructure/persistence/UserModel"; // Importa tu modelo Sequelize
import { UserUid } from "../domain/UserUid";
import { UserPassword } from "../domain/UserPassword";

export class PostgresUserRepository implements UserRepository {

    async create(user: User): Promise<void> {
        await UserModel.create({
            id: user.id.value,
            uid: user.uid.value,
            email: user.email.value,
            password: user.password.value,
            createdAt: user.createdAt.value // Asegúrate de que esto esté alineado con tu modelo
        });
    }

    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll(); // Obtiene todos los usuarios

        return users.map((row) => new User(
            new UserId(row.id),
            new UserUid(row.Uid),
            new UserEMail(row.email),
            new UserPassword(row.password),
            new UserCreatedAt(row.createdAt)
        ));
    }

    async getUserById(id: UserId): Promise<User | null> {
        const user = await UserModel.findByPk(id.value); // Busca el usuario por su clave primaria

        if (!user) {
            return null;
        }

        return new User(
            new UserId(user.id),
            new UserUid(user.Uid),
            new UserEMail(user.email),
            new UserPassword(user.password),
            new UserCreatedAt(user.createdAt)
        );
    }

    async update(user: User): Promise<void> {
        await UserModel.update(
            {
                email: user.email.value,
                password: user.password.value
            },
            {
                where: { id: user.id.value } // Actualiza solo el usuario con el ID dado
            }
        );
    }

    async delete(id: UserId): Promise<void> {
        await UserModel.destroy({
            where: { id: id.value } // Elimina el usuario con el ID dado
        });
    }
}