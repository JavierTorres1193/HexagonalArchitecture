export class PersonId {
    value:number;

    constructor(value:number) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (!this.value) {
            throw new Error('PersonId cannot be null or empty');
        }
    }

}