import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThfModalAction, ThfModalComponent, ThfStepperItem, ThfPageAction, ThfStepperStatus } from '@totvs/thf-ui';
import { Router } from '@angular/router';
import { ValidadorFormService } from '../shared/validador-form.service';

@Component({
  selector: 'app-teste-responsivo',
  templateUrl: './teste-responsivo.component.html',
  styleUrls: ['./teste-responsivo.component.css']
})
export class TesteResponsivoComponent implements AfterViewInit {

  paginaAnterior: boolean;
  etapa = 1;
  acoesPagina: Array<ThfPageAction> = [];
  public formulariosStepper: Array<FormGroup> = [];
  validadorForm: ValidadorFormService;

  public etapas: Array<ThfStepperItem> = [
    { label: 'Início' },
    { label: 'Teste 1' },
    { label: 'Teste 2'}
  ];

  ngAfterViewInit() {

  }

  constructor(
    // tslint:disable-next-line: variable-name
    private _router: Router
  ) {}

  getAcoesNovaJanela() {
    this.acoesPagina = [];
    if (this.etapa === 1) {
      this.acoesPagina.push(
        { label: 'Próximo', action: this.avancarEtapa },
        { label: 'Cancelar', action: this.cancelarProcesso }
      );
    } else if (this.etapa === 4) {
        this.acoesPagina.push(
          { label: 'Salvar', action: this.salvarAgenda },
          { label: 'Anterior', action: this.voltarEtapa }
        );
    } else {
      this.acoesPagina.push(
        { label: 'Proximo', action: this.avancarEtapa },
        { label: 'Anterior', action: this.voltarEtapa }
      );
    }
    return this.acoesPagina;
  }

  avancarEtapa() {
    this.paginaAnterior = false;
    this.alterarPasso(this.etapa + 1);
   }

  voltarEtapa() {
    if (this.etapa > 1) {
      this.paginaAnterior = true;
      this.alterarPasso(this.etapa - 1);
    }
  }

  alterarPasso(novoPasso) {
    const form = this.getFormularioAtual();
    if (!this.paginaAnterior) {
        const stepperItem = this.etapas[this.etapa - 1];
        this.etapa = novoPasso;
        if (stepperItem) {
          stepperItem.status = ThfStepperStatus.Done;
        }
    } else {
      this.etapa = novoPasso;
    }
  }

  getFormularioAtual() {
    return this.formulariosStepper[this.etapa - 1];
  }

  cancelarProcesso() {
    this._router.navigate(['responsivo']);
  }

  salvarAgenda() {
    console.log('TODO: Salvar');
  }
}
