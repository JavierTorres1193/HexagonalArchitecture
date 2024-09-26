export class PersonLastName {
    value: string;

    constructor(value:string) {
        this.value = value
    }

    private ensureisValid() {
        if (!this.value) {
            throw new Error('PersonLastName is required')
            }
    }
};