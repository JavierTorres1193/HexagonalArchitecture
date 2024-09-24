import { UserDelete } from "../../../../../lib/User/application/UserDelete/UserDelete";
import { InMemoryUserRepository } from "../../__mocks__/InMemoryUserRepository";
import { UserStub } from "../../domain/userStub"

describe("UserDelete should", ()=>{
    test('Delete a user ', async () => {
      const user = UserStub.create();

      const repository = new InMemoryUserRepository([user]);
      const deleteUseCase = new UserDelete(repository);
      const usersBefore = await repository.getAll();

      expect(usersBefore).toHaveLength(1);

      await deleteUseCase.run(user.id.value);
      const usersAfter = await repository.getAll();
      expect(usersAfter).toHaveLength(0);

    })
    
})