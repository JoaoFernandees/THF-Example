import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
import { ValidadorFormService } from 'src/app/shared/validador-form.service';

@Component({
  selector: 'app-teste-stepper-second',
  templateUrl: './teste-stepper-second.component.html',
  styleUrls: ['./teste-stepper-second.component.css']
})
export class TesteStepperSecondComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    public validadorForm: ValidadorFormService
  ) { }

  ngOnInit() {
    // this.validadorForm.cargaForm = this._formBuilder.group({});
  }

}
