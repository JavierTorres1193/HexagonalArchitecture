import { PersonAddres } from "./PersonAddres";
import { PersonCuit } from "./PersonCuit";
import { PersonDni } from "./PersonDni";
import { PersonEmail } from "./PersonEmail";
import { PersonId } from "./PersonId";
import { PersonLastName } from "./PersonLastName";
import { PersonName } from "./PersonName";

export class Person {
    id: PersonId;
    name: PersonName;
    lastname: PersonLastName;
    dni: PersonDni;
    cuit: PersonCuit;
    address: PersonAddres;
    email: PersonEmail;


    constructor(
        id: PersonId,
        name: PersonName,
        lastname: PersonLastName,
        dni: PersonDni,
        cuit: PersonCuit,
        address: PersonAddres,
        email: PersonEmail
        ) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.dni = dni;
        this.cuit = cuit;
        this.address = address;
        this.email = email;
        }
    
    
    public mapToPrimitives() {
        return {
            id: this.id.value,
            name: this.name.value,
            lastname: this.lastname.value,
            dni: this.dni.value,
            cuit: this.cuit.value,
            address: this.address.value,
            email: this.email.value,

        };
    };
};