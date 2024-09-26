import { Person } from "../../domain/Person";
import { PersonAddres } from "../../domain/PersonAddres";
import { PersonCuit } from "../../domain/PersonCuit";
import { PersonDni } from "../../domain/PersonDni";
import { PersonEmail } from "../../domain/PersonEmail";
import { PersonId } from "../../domain/PersonId";
import { PersonLastName } from "../../domain/PersonLastName";
import { PersonName } from "../../domain/PersonName";
import { PersonRepository } from "../../domain/PersonRepository";

export class PersonCreate {
    constructor(private repository: PersonRepository) {};
    async run(id:number,name:string,lastname:string,dni:string,cuit:string, address:string,email:string):Promise<void>{
        const person = new Person(
            new PersonId(id),
            new PersonName(name),
            new PersonLastName(lastname),
            new PersonDni(dni),
            new PersonCuit(cuit),
            new PersonAddres(address),
            new PersonEmail(email),
        );
        return this.repository.create(person);
    };
};