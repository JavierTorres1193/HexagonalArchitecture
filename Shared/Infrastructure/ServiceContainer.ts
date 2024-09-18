import { UserCreate } from "../../src/lib/User/application/UserCreate/UserCreate";
import { UserDelete } from "../../src/lib/User/application/UserDelete/UserDelete";
import { UserEdit } from "../../src/lib/User/application/UserEdit/UserEdit";
import { UserGetAll } from "../../src/lib/User/application/UserGetAll/UserGetAll";
import { UserGetById } from "../../src/lib/User/application/UserGetById/UserGetById";
import { InMemoryUserRepository } from "../../src/lib/User/infrastructure/InMemoryUserRepository"

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