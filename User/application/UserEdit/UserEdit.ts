import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEMail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { Username } from "../../domain/Username";
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
        return this.repository.update(user);
    }
}