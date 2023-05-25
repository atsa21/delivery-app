import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { errorType } from 'src/app/models/typeError.enum';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() validator!: AbstractControl;

  errorMessage: string = '';

  private validatorErrors = {
    required: 'This field is required',
    minlength: 'The field must contain more characters',
    maxlength: 'The field must contain fewer characters',
    maxlengthName: 'Name must contain fewer that 70 characters',
    pattern: 'Phone number be in +380 format',
    email: 'Please enter a correct email format'
  };

  ngOnInit(): void {
    if(this.validator) {
      this.getType();
      this.validator.valueChanges.pipe().subscribe(() => {
        this.getType();
      });
    }
  }

  getType(): void {
    Object.values(errorType).forEach((err) => {
      if (this.validator?.errors?.[err]) {
        switch (err) {
          case errorType.minlength:
            this.errorMessage = this.validatorErrors.minlength;
            break;
          case errorType.maxlength:
            this.errorMessage = this.getMaxlength(this.validator.errors?.['maxlength'].requiredLength);
            break;
          case errorType.email:
            this.errorMessage = this.validatorErrors.email;
            break;
          default:
            this.errorMessage = this.validatorErrors[err];
        }
      }
    });
  }

  getMaxlength(maxlength: number): string {
    return maxlength === 70 ? this.validatorErrors.maxlengthName : this.validatorErrors.maxlength;
  }
}
