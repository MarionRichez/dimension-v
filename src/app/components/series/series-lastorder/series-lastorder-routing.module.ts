import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesLastorderComponent } from './series-lastorder.component';

const routes: Routes = [{ path: '', component: SeriesLastorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesLastorderRoutingModule { }
