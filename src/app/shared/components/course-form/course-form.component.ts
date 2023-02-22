import { Component, Input } from "@angular/core";
import {
  FormBuilder, FormControl, Validators
} from "@angular/forms";
import { fieldValidator } from "../../utils/field-validator";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  @Input() author_button: string = '';
  @Input() form_button: string = '';
  durationValue: string = ''
  titleFormControl = new FormControl('', [Validators.required, fieldValidator]);
  descriptionFormControl = new FormControl('', [Validators.required, fieldValidator]);
  durationFormControl = new FormControl('', [Validators.required, fieldValidator]);
}
