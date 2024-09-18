import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetById {
    constructor(private  repository: UserRepository) {}

    async run(id:string): Promise<User | null> {
        const user =await this.repository.getUserById(new UserId(id));

        if(!user) throw new UserNotFoundError('User not found');

        return user;
    }
}