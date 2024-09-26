export class PersonDni {
    value: string;

    constructor(value:string) {
        this.value = value;
        this.ensureisValid();
        this.ensureLength();
    };

    private ensureisValid() {
        if (!this.value) {
            throw new Error("Dni cannot be null");       
        }
    };

    private ensureLength() {
        if (this.value.length < 8) {
            throw new Error("Dni must be 8 or more characters long");
    }
}
}