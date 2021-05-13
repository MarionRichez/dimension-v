import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDimensionComponent } from './character-dimension.component';

const routes: Routes = [{ path: '', component: CharacterDimensionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDimensionRoutingModule { }
