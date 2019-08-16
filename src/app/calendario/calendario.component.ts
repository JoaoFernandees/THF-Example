import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfMultiselectOption, ThfPageAction, ThfModalComponent } from '@totvs/thf-ui';
import { NgForm } from '@angular/forms';
import { Event } from './model/event';
import { Resource, Group } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() {}

  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent;
  @ViewChild('optionsForm', { static: true }) form: NgForm;

  get acoesPagina() {
    return this._acoesPagina;
  }

  opcoesProcesso: Array<ThfMultiselectOption> = [
    { value: '1', label: 'Carga do cliente' },
    { value: '2', label: 'Descarga importados' }
  ];

  opcoesLocais: Array<ThfMultiselectOption> = [
    { value: '3', label: 'TOTVS' }
  ];

  opcoesTransportadorFornecedor: Array<ThfMultiselectOption> = [
    { value: '1', label: 'Lorem' },
    { value: '2', label: 'Ipsum' }
  ];

  opcoesProduto: Array<ThfMultiselectOption> = [
    { value: '1', label: 'Bubina de aço' }
  ];

  opcoesTipoVeiculo: Array<ThfMultiselectOption> = [
    { value: '1', label: 'Carreta' }
  ];

  // tslint:disable-next-line: variable-name
  private _acoesPagina: Array<ThfPageAction>;
  public selectedViewIndex = 1;
  public evento: Event = new Event();
  public hourMask = '99:99';
  public events: Array<Event> = [
    {
      id: 1,
      title: 'Breakfast',
      start: new Date(),
      end: new Date(),
      roomId: 1
    }
  ];

  public rooms = [];

  public orientation = 'horizontal';

  public editable = true;

  public resources: Array<Resource> = [{
    name: 'Rooms',
    data: [],
    field: 'roomId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
  }];

  public group: Group = {
    resources: ['Rooms'],
    orientation: 'horizontal'
  };

  ngOnInit(): void {
    this.setAcoesPagina();
  }

  setAcoesPagina() {
    this._acoesPagina = [
      {
        label: 'Novo',
        action: this.abrirJanela,
        icon: 'thf-icon-plus'
      }
    ];
  }

  abrirJanela() {
    console.log('teste');
  }

  public onSchedulerViewChange(event) {
    if (event !== 1) {
      this.group = undefined;
    } else {
      this.group = {
        resources: ['Rooms'],
        orientation: 'horizontal'
      };
    }
  }
}
