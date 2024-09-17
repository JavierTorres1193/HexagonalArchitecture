import { UserCreate } from "../../User/application/UserCreate/UserCreate";
import { UserDelete } from "../../User/application/UserDelete/UserDelete";
import { UserEdit } from "../../User/application/UserEdit/UserEdit";
import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
import { UserGetById } from "../../User/application/UserGetById/UserGetById";
import { InMemoryUserRepository } from "../../User/infrastructure/InMemoryUserRepository"

const userRepository = new InMemoryUserRepository; 

export const ServiceContainer = {
    user:{
        getAll: new UserGetAll(userRepository),
        getById: new UserGetById(userRepository),
        create: new UserCreate(userRepository),
        update: new UserEdit(userRepository),
        delete: new UserDelete(userRepository)
    },

}