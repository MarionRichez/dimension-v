import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesDimensionRoutingModule } from './series-dimension-routing.module';
import { SeriesDimensionComponent } from './series-dimension.component';


@NgModule({
  declarations: [
    SeriesDimensionComponent
  ],
  imports: [
    CommonModule,
    SeriesDimensionRoutingModule
  ]
})
export class SeriesDimensionModule { }
