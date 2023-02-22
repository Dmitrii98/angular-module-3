import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { fieldValidator } from "../utils/field-validator";

@Directive({
    selector: '[fieldValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: FieldValidatorDirective,
            multi: true
        }
    ]
})
export class FieldValidatorDirective implements Validator {
    validate(control: FormControl): { [key: string]: string } | null {
        return fieldValidator(control);
    }
}
