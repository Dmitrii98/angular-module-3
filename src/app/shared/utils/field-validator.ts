import { FormControl } from '@angular/forms';

export function fieldValidator(control: FormControl): { [key: string]: string } | null {

    if (!control.value.length) {
        return { invalidField: 'Field is required' };
    }

    return null;
}