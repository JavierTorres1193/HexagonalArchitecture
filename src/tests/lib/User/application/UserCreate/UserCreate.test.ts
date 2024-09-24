import { UserCreate } from "../../../../../lib/User/application/UserCreate/UserCreate";
import { InMemoryUserRepository } from "../../__mocks__/InMemoryUserRepository"
import { UserStub } from "../../domain/userStub";

describe("UserCreate should", ()=> {
    test("Create a User", async () => {
        const repository = new InMemoryUserRepository();
        const useCase = new UserCreate(repository);
        const user = UserStub.create();
        await useCase.run(
            user.id.value,
            user.uid.value,
            user.email.value,
            user.password.value,
            user.idTypeState.value,
            user.createdAt.value
        );
        const users = await repository.getAll();
        expect(users).toHaveLength(1);
        const createdUser = users[0];
        expect(createdUser.id.value).toBe(user.id.value);
        expect(createdUser.uid.value).toBe(user.uid.value);
        expect(createdUser.email.value).toBe(user.email.value);
        expect(createdUser.password.value).toBe(user.password.value);
        expect(createdUser.idTypeState.value).toBe(user.idTypeState.value);
    })
})