import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThfModule } from '@totvs/thf-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { IntlModule } from '@progress/kendo-angular-intl';
import { CalendarioComponent } from './calendario.component';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioNavegacaoComponent } from './calendario-navegacao/calendario-navegacao.component';

@NgModule({
    declarations: [
        CalendarioComponent,
        CalendarioNavegacaoComponent
    ],
    imports: [
        CommonModule,
        ThfModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        SchedulerModule,
        IntlModule,
        CalendarioRoutingModule
    ],
    exports: [
        CalendarioComponent
    ]
})
export class CalendarioModule {
}
