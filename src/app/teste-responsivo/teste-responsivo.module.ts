import { NgModule } from '@angular/core';
import { TesteResponsivoComponent } from './teste-responsivo.component';
import { TesteResponsivoRoutingModule } from './teste-responsivo-routing.module';
import { ThfModule } from '@totvs/thf-ui';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TesteStepperComponent } from './teste-stepper/teste-stepper.component';
import { TesteStepperSecondComponent } from './teste-stepper-second/teste-stepper-second.component';

@NgModule({
    declarations: [
        TesteResponsivoComponent,
        TesteStepperComponent,
        TesteStepperSecondComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TesteResponsivoRoutingModule,
        ThfModule
    ],
    exports: [
        TesteResponsivoComponent
    ]
})

export class TesteResponsivoModule {}
