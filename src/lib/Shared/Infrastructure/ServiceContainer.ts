import { PostgresUserRepository } from "../../User/infrastructure/PostgresUserRepository";
import { UserCreate } from "../../User/application/UserCreate/UserCreate";
import { UserDelete } from "../../User/application/UserDelete/UserDelete";
import { UserEdit } from "../../User/application/UserEdit/UserEdit";
import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
import { UserGetById } from "../../User/application/UserGetById/UserGetById";
import { sequelize } from "../../../lib/Shared/Infrastructure/config/sequalize"; // Importa la configuración de Sequelize
import { UserModel } from "../../User/infrastructure/ORM/UserModel"; // Importa el modelo Sequelize
import { UserORMRepository } from "../../User/infrastructure/ORM/UserORMRepository";

// Inicializa el repositorio con la instancia de Sequelize y el modelo
const userRepository = new UserORMRepository();


export const ServiceContainer = {
    user: {
        getAll: new UserGetAll(userRepository),
        getById: new UserGetById(userRepository),
        create: new UserCreate(userRepository),
        update: new UserEdit(userRepository),
        delete: new UserDelete(userRepository)
    },
};
