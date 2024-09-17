import { UserCreatedAt } from "./UserCreatedAt";
import { UserEMail } from "./UserEmail";
import { UserId } from "./UserId";
import { Username } from "./Username";

export class User {
    id: UserId;
    name: Username;
    email: UserEMail;
    createdAt: UserCreatedAt;

    constructor(id:UserId, name:Username, email:UserEMail, createdAt:UserCreatedAt){
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    public nameAndEmail() {
        return `${this.name} - ${this.email}`;
    }
}