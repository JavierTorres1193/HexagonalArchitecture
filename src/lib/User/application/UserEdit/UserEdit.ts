import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEMail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { Username } from "../../domain/Username";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserEdit {
    constructor(private repository: UserRepository) {}

    async run(id:string,name:string,email:string): Promise<void> {
        const user = new User(
            new UserId(id),
            new Username(name),
            new UserEMail(email),
            new UserCreatedAt(new Date())
        );

        const userExist = await this.repository.getUserById(user.id)

        if (!userExist) throw new UserNotFoundError('User not found');
        

        return this.repository.update(user);
    }
}