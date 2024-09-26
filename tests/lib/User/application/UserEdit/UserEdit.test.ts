import { UserEdit } from "../../../../../src/lib/User/application/UserEdit/UserEdit";
import { InMemoryUserRepository } from "../../__mocks__/InMemoryUserRepository";
import { UserStub } from "../../domain/userStub"

describe("UserEdit should", () => {
    test("edit a user", async () => {
      const user = UserStub.create();
  
      const repository = new InMemoryUserRepository([user]);
      const editUseCase = new UserEdit(repository);
  
      const usersBefore = await repository.getAll();
  
      expect(usersBefore).toHaveLength(1);
  
      const newUser = UserStub.create();
  
  
      await editUseCase.run(user.id.value,  newUser.Uid.value, newUser.email.value, newUser.password.value, new Date());
  
      const usersAfter = await repository.getAll();
  
      expect(usersAfter).toHaveLength(1);
  
      const editedUser = usersAfter[0];
  
      expect(editedUser.id.value).toBe(user.id.value);
      expect(editedUser.Uid.value).toBe(newUser.Uid.value);
      expect(editedUser.email.value).toBe(newUser.email.value);
      expect(editedUser.password.value).toBe(newUser.password.value);
    });
  });