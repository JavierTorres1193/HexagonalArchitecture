import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEMail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserPassword } from "../../domain/UserPassword";
import { UserRepository } from "../../domain/UserRepository";
import { UserUid } from "../../domain/UserUid";

export class UserCreate {
    constructor(private repository: UserRepository){}

        async run(id:number,Uid:string ,email:string, password:string,createdAt:Date): Promise<void> {
            const user = new User(
                new UserId(id),
                new UserUid(Uid),
                new UserEMail(email),
                new UserPassword(password),
                new UserCreatedAt(createdAt)
            );

            return this.repository.create(user);
        };
    
};