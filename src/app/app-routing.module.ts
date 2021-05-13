import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'trailer',
    loadChildren: () =>
      import('./components/trailer/trailer.module').then(
        (m) => m.TrailerModule
      ),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./components/character/character.module').then(
        (m) => m.CharacterModule
      ),
  },
  {
    path: 'character-dimension',
    loadChildren: () =>
      import(
        './components/character/character-dimension/character-dimension.module'
      ).then((m) => m.CharacterDimensionModule),
  },
  {
    path: 'character-lastorder',
    loadChildren: () =>
      import(
        './components/character/character-lastorder/character-lastorder.module'
      ).then((m) => m.CharacterLastorderModule),
  },
  {
    path: 'series',
    loadChildren: () =>
      import('./components/series/series.module').then((m) => m.SeriesModule),
  },
  {
    path: 'series-dimension',
    loadChildren: () =>
      import(
        './components/series/series-dimension/series-dimension.module'
      ).then((m) => m.SeriesDimensionModule),
  },
  {
    path: 'series-lastorder',
    loadChildren: () =>
      import(
        './components/series/series-lastorder/series-lastorder.module'
      ).then((m) => m.SeriesLastorderModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
