import { Person } from "../../domain/Person";
import { PersonAddres } from "../../domain/PersonAddres";
import { PersonCuit } from "../../domain/PersonCuit";
import { PersonDni } from "../../domain/PersonDni";
import { PersonEmail } from "../../domain/PersonEmail";
import { PersonId } from "../../domain/PersonId";
import { PersonLastName } from "../../domain/PersonLastName";
import { PersonName } from "../../domain/PersonName";
import { PersonRepository } from "../../domain/PersonRepository";
import { PersonModel } from "./PersonModel";


export class PersonORMRepository implements PersonRepository {

    async getPersonById(id: PersonId): Promise<Person | null> {
        const person = await PersonModel.findByPk(id.value);
        return person ? this.mapToDomain(person) : null
        
    }

    async update(person: Person): Promise<void> {
        await PersonModel.update(person.mapToPrimitives(), {
            where: {id:person.id.value},
            returning: true,
        })
    }
    
    async getAll(): Promise<Person[]> {
        const persons = await PersonModel.findAll();
        return persons.map(person => this.mapToDomain(person))
    }

    async create(person: Person): Promise<void> {
        await PersonModel.create(person.mapToPrimitives())
    }

    async delete(id: PersonId): Promise<void> {
        await PersonModel.destroy({where: {id:id.value}});
    }


    private mapToDomain(personModel: any): Person {
        return new Person(
            new PersonId(personModel.id),
            new PersonName(personModel.name),
            new PersonLastName(personModel.lastName),
            new PersonDni(personModel.dni),
            new PersonCuit(personModel.cuit),
            new PersonAddres(personModel.addres),
            new PersonEmail(personModel.email),
        );
    }

}