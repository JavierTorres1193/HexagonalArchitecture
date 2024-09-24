import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEMail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserPassword } from "../../domain/UserPassword";
import { UserRepository } from "../../domain/UserRepository";
import { UserUid } from "../../domain/UserUid";

export class UserEdit {
    constructor(private repository: UserRepository) {}

    async run(id:string,uid:string,email:string,password:string,createdAt:Date): Promise<void> {
        const user = new User(
            new UserId(id),
            new UserUid(uid),
            new UserEMail(email),
            new UserPassword(password),
            new UserCreatedAt(createdAt)
        );

        const userExist = await this.repository.getUserById(user.id)

        if (!userExist) throw new UserNotFoundError('User not found');
        

        return this.repository.update(user);
    }
}