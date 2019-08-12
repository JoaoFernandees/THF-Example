import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ValidadorFormService } from 'src/app/shared/validador-form.service';

@Component({
  selector: 'app-teste-stepper',
  templateUrl: './teste-stepper.component.html',
  styleUrls: ['./teste-stepper.component.css']
})
export class TesteStepperComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private validadorForm: ValidadorFormService
  ) { }

  ngOnInit() {
    // this.validadorForm.inicioForm = this._formBuilder.group({});
  }

}
