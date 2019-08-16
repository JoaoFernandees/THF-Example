import { Component } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuItems = [
    {
      action: null,
      icon: 'thf-icon-calendar-ok',
      label: 'Teste responsividade',
      link: '/responsivo',
      shortLabel: 'Responsividade'
    },
    {
      action: null,
      icon: 'thf-icon-calendar-ok',
      label: 'Calendário',
      link: '/calendario',
      shortLabel: 'Calendário'
    },
  ];
}
