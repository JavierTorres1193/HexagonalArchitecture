export class UserId {
    value:number;
    
    constructor(value:number){
        this.value = value;
        this.ensureIsValid();
    }
    
  
    private ensureIsValid() {
        if (!this.value) {
            throw new Error('UserId is null');
        }
    }

}