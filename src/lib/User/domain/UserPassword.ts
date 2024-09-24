export class UserPassword {
    value: string

    constructor (value:string) {
        this.value = value;
        this.isNulleable();
        this.isValid();
    }

    private isNulleable() {
        if (!this.value) {
            throw new Error("The password cannot be null, please complete the field");
            
        }  
    }

    private isValid() {
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    
        if (!regex.test(this.value)) {
            throw new Error("La contraseña debe tener al menos 8 caracteres, contener al menos un número y una letra mayúscula.");
        }
    }

}