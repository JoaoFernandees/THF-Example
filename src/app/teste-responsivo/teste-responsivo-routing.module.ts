import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteResponsivoComponent } from './teste-responsivo.component';

const routes: Routes = [
    { path: '', component: TesteResponsivoComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class TesteResponsivoRoutingModule {}
