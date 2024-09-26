import { Person } from "../../domain/Person";
import { PersonRepository } from "../../domain/PersonRepository";

export class PersonGetAll {
    constructor(private repository: PersonRepository){}

    async run():Promise<Person[]> {
        return this.repository.getAll();
    }

}