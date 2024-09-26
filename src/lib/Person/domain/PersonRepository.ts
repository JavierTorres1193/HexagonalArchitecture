import { Person } from "./Person";
import { PersonId } from "./PersonId";


export interface PersonRepository {
    create(person:Person): Promise <void>;
    getAll():Promise<Person[]>;
    getPersonById(id:PersonId): Promise<Person | null>;
    update(person:Person): Promise<void>;
    delete(id:PersonId): Promise<void>;
}