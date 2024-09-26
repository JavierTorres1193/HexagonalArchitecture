export class PersonCuit {
    value: string;
    
    constructor(value:string){
        this.value = value;
        this.ensureisValid();
        this.ensureLength();
    }


    private ensureisValid() {
        if (!this.value) {
            throw new Error("Dni cannot be null");       
        }
    };

    private ensureLength() {
        if (this.value.length < 11) {
            throw new Error("Cuit must be 11 characters long");
    }
}
}