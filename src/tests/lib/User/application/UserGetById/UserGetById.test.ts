import { UserGetById } from "../../../../../lib/User/application/UserGetById/UserGetById";
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
      expect(userFound?.name.value).toBe(user.name.value);
      expect(userFound?.email.value).toBe(user.email.value);
    });
  
    test("throws an error if user not found", async () => {
      const repository = new InMemoryUserRepository();
      const useCase = new UserGetById(repository);
  
      try {
        await useCase.run("invalid-id");
      } catch (error) {
        const { message } = error as Error;
        expect(message).toBe("User not found");
      }
    });
  });