import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaFestivoFormComponent } from './feature/diaFestivo/form/diaFestivo.form.component';
import { CategoriaFormComponent } from './feature/categoria/form/categoria.form.component';

const routes: Routes = [
  { path: 'diaFestivo', component: DiaFestivoFormComponent },
  { path: 'diaFestivo/:id', component: DiaFestivoFormComponent },
  { path: 'categoria', component: CategoriaFormComponent },
  { path: 'categoria/:id', component: CategoriaFormComponent },
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
  },

  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
