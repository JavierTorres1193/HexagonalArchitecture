import { UserCreatedAt } from "./UserCreatedAt";
import { UserEMail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserPassword } from "./UserPassword";
import { UserUid } from "./UserUid";

export class User {
  id: UserId;
  Uid: UserUid;
  email: UserEMail;
  password: UserPassword;
  createdAt: UserCreatedAt;

  constructor(
    id: UserId,
    Uid: UserUid,
    email: UserEMail,
    password: UserPassword,
    createdAt: UserCreatedAt
  ) {
    this.id = id;
    this.Uid = Uid;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
  }


  public mapToPrimitives() {
    return {
      id: this.id.value,
      Uid: this.Uid.value,
      email: this.email.value,
      password: this.password.value,
      createdAt: this.createdAt.value,
    };
  }
}
