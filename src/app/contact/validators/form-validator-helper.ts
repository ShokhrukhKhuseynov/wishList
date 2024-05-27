import { FormGroup } from "@angular/forms";

export class FormValidatorHelper{

    constructor(private form : FormGroup ) { }


    fieldWithInvalidEmailDomain(fieldName : string){
        return this.form.get(fieldName)?.hasError('invalidEmailDomain');
    }
    
    validFormField(fieldName : string){
        return this.form.get(fieldName)?.invalid && (this.form.get(fieldName)?.dirty || this.form.get(fieldName)?.touched)
    }

    fieldRequired(fieldName : string){
        return this.form.get(fieldName)?.hasError('required');
    }

    fieldWithMinLength(fieldName : string){
        return this.form.get(fieldName)?.hasError('minlength');
    }

    fieldWithEmailFormat(fieldName : string){
        return this.form.get(fieldName)?.hasError('email');
    }

    
}