import { Person } from "../../domain/Person";
import { PersonId } from "../../domain/PersonId";
import { PersonNotFoundError } from "../../domain/PersonNotFoundError";
import { PersonRepository } from "../../domain/PersonRepository";

export class PersonGetById {
    constructor(private repostory: PersonRepository) {}

    async run(id:number): Promise <Person | null> {
        const person = await this.repostory.getPersonById(new PersonId(id));
        if(!person) throw new PersonNotFoundError("Person not found");
        return person;
    }
}