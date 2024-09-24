import { UserId } from "../../../../lib/User/domain/UserId";
import { User } from "../../../../lib/User/domain/User";
import { randEmail, randFirstName, randUuid } from "@ngneat/falso";
import { Username } from "../../../../lib/User/domain/Username";
import { UserCreatedAt } from "../../../../lib/User/domain/UserCreatedAt";
import { UserEMail } from "../../../../lib/User/domain/UserEmail";

export class UserStub {
  static create(): User {
    return new User(
      new UserId(randUuid()),
      new Username(this.createSafeName()),
      new UserEMail(randEmail()),
      new UserCreatedAt(new Date()),
    );
  }

  static createSafeName(): string {
    const name = randFirstName();
    if (name.length < 3) return this.createSafeName();
    return name;
  }
}
