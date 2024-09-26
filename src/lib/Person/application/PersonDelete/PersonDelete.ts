import { PersonRepository } from "../../domain/PersonRepository";
import { PersonId } from "../../domain/PersonId";

export class PersonDelete {
    constructor(private  repository: PersonRepository) {};

    async run(id:number): Promise<void> {
        await this.repository.delete(new PersonId(id));
    }
}