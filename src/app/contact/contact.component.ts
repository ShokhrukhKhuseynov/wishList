import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidatorHelper } from './validators/form-validator-helper';
import { createInvalidDomainValidator } from './validators/invalidDomainEmail';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com'])

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() { }

  contactForm = new FormGroup({
    senderName : new FormControl('', Validators.required),
    senderEmail : new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage : new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  formValidator = new FormValidatorHelper(this.contactForm);
  
  submitForm(){
    console.log(this.contactForm.value)
  }
}
