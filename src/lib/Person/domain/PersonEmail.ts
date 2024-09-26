export class PersonEmail {
    value:string;

    constructor(value:string) {
        this.value = value;
        this.ensureisValid();
    }

    private ensureisValid() {
        if(!this.value.includes("@") || !this.value.includes(".")){
            throw new Error("Invalid email address");
        }
        
    };
};