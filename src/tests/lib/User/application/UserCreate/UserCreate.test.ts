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
            user.Uid.value,
            user.email.value,
            user.password.value,
            user.createdAt.value
        );
        const users = await repository.getAll();
        expect(users).toHaveLength(1);
        const createdUser = users[0];
        expect(createdUser.id.value).toBe(user.id.value);
        expect(createdUser.Uid.value).toBe(user.Uid.value);
        expect(createdUser.email.value).toBe(user.email.value);
        expect(createdUser.password.value).toBe(user.password.value);
    })
})