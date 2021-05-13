import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesDimensionComponent } from './series-dimension.component';

const routes: Routes = [{ path: '', component: SeriesDimensionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesDimensionRoutingModule { }
