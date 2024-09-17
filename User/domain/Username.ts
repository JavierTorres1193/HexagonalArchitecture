export class Username {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (this.value.length < 3) {
            throw new Error('Username must be at least 3 characters long');
        }
    }
}