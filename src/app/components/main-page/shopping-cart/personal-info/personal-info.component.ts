import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  orderForm!: FormGroup;

  @Output() orderEmitter = new EventEmitter<any>();

  constructor( private fb : FormBuilder) {}

  ngOnInit(): void {
      this.initForm();
  }

  initForm(): void {
    this.orderForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      address: new FormControl('', Validators.required)
    });
    this.orderForm.statusChanges.subscribe(() => {
      this.orderEmitter.emit(this.orderForm);
    })
  }

  getControl(controlName: string): AbstractControl {
    const formControl = this.orderForm.get(controlName);
    return formControl!;
  }

  getIsControlInvalid(controlName: string): boolean {
    return this.getControl(controlName).touched && this.getControl(controlName).invalid;
  }
}
