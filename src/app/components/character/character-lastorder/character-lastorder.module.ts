import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterLastorderRoutingModule } from './character-lastorder-routing.module';
import { CharacterLastorderComponent } from './character-lastorder.component';


@NgModule({
  declarations: [
    CharacterLastorderComponent
  ],
  imports: [
    CommonModule,
    CharacterLastorderRoutingModule
  ]
})
export class CharacterLastorderModule { }
