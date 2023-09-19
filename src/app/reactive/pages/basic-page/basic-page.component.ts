import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private validatorsService:ValidatorsService) { }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    instorage: [0, [Validators.required, Validators.min(0)]]
  });

  ngOnInit(): void {
    /*
    this.myForm.reset({
      name: 'RTX5090',
      price: 2500,
      instorage: 6
    });
    */
  }

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }
  getFieldError(field: string): string | null {

    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Este campo debe tener ${errors['minlength'].requiredLength} caracteres`
      }
    }
    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    };
    console.log(this.myForm.value);
    this.myForm.reset({ price: 0, instorage: 0 });
  }


}
