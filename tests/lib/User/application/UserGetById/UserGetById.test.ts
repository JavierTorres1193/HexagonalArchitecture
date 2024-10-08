import { UserGetById } from "../../../../../src/lib/User/application/UserGetById/UserGetById";
import { InMemoryUserRepository } from "../../__mocks__/InMemoryUserRepository"
import { UserStub } from "../../domain/userStub";

describe("UserGetOneById should", () => {
    test("return a user", async () => {
      const user = UserStub.create();
  
      const repository = new InMemoryUserRepository([user]);
      const useCase = new UserGetById(repository);
  
      const userFound = await useCase.run(user.id.value);
  
      expect(userFound).not.toBeNull();
      expect(userFound?.id.value).toBe(user.id.value);
      expect(userFound?.Uid.value).toBe(user.Uid.value);
      expect(userFound?.email.value).toBe(user.email.value);
      expect(userFound?.password.value).toBe(user.password.value);
    });
  
    test("throws an error if user not found", async () => {
      const repository = new InMemoryUserRepository();
      const useCase = new UserGetById(repository);
  
      try {
        await useCase.run(99999);
      } catch (error) {
        const { message } = error as Error;
        expect(message).toBe("User not found");
      }
    });
  });