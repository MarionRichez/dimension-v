import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDimensionRoutingModule } from './character-dimension-routing.module';
import { CharacterDimensionComponent } from './character-dimension.component';


@NgModule({
  declarations: [
    CharacterDimensionComponent
  ],
  imports: [
    CommonModule,
    CharacterDimensionRoutingModule
  ]
})
export class CharacterDimensionModule { }
