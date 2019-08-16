import { Component, OnInit, Input } from '@angular/core';
import { ToolbarService } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-calendario-navegacao',
  templateUrl: './calendario-navegacao.component.html',
  styleUrls: ['./calendario-navegacao.component.css']
})
export class CalendarioNavegacaoComponent {

  @Input()
  public selectedDate: Date;

  constructor(public toolbarService: ToolbarService) { }

  public next(): void {
    this.toolbarService.navigate({
      type: 'next'
    });
  }

  public prev(): void {
    this.toolbarService.navigate({
      type: 'prev'
    });
  }

}
