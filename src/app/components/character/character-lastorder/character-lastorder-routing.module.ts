import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterLastorderComponent } from './character-lastorder.component';

const routes: Routes = [{ path: '', component: CharacterLastorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterLastorderRoutingModule { }
