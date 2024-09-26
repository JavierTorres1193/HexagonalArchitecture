export class PersonAddres {
    value:string;

    constructor(value:string) {
        this.value = value;
        this.ensureIsValid();

    };

    private ensureIsValid() {
        if (!this.value) {
            throw new Error('PersonAddres is null');
        }
    };
};