import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesLastorderRoutingModule } from './series-lastorder-routing.module';
import { SeriesLastorderComponent } from './series-lastorder.component';

@NgModule({
  declarations: [SeriesLastorderComponent],
  imports: [CommonModule, SeriesLastorderRoutingModule],
})
export class SeriesLastorderModule {}
