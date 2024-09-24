import { UserId } from "../../../../lib/User/domain/UserId";
import { User } from "../../../../lib/User/domain/User";
import { randEmail, randFirstName, randNumber, randUuid } from "@ngneat/falso";
import { UserCreatedAt } from "../../../../lib/User/domain/UserCreatedAt";
import { UserEMail } from "../../../../lib/User/domain/UserEmail";
import { UserUid } from "../../../../lib/User/domain/UserUid";
import { UserPassword } from "../../../../lib/User/domain/UserPassword";
import { UserTypeState } from "../../../../lib/User/domain/UserTypeState";

export class UserStub {
  static create(): User {
    return new User(
      new UserId(randUuid()),
      new UserUid(randUuid()),
      new UserEMail(randEmail()),
      new UserPassword(this.generateRandomPassword()), // Asignación de la contraseña generada
      new UserTypeState(randNumber({ min: 1, max: 10 })),
      new UserCreatedAt(new Date()),
    );
  }

  static createSafeName(): string {
    const name = randFirstName();
    if (name.length < 3) return this.createSafeName();
    return name;
  }

  static generateRandomPassword(length: number = 12): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length); // Generación de índice aleatorio
      password += charset[randomIndex];
    }

    return password;
  }
}
