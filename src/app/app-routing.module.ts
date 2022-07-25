import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { DiaFestivoComponent } from './diaFestivo/diaFestivo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ActividadComponent } from './actividad/actividad.component';

const routes: Routes = [
  { path: 'roles', component: RolesComponent },
  { path: 'roles/:id', component: RolesComponent },
  { path: 'diaFestivo', component: DiaFestivoComponent },
  { path: 'diaFestivo/:id', component: DiaFestivoComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/:id', component: CategoriaComponent },
  { path: 'actividad', component:ActividadComponent},
  { path: 'actividad/:id', component:ActividadComponent},
  {path: '', redirectTo: '/layout', pathMatch: 'full'},
  {path: 'layout', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)},
  {path: 'feature', loadChildren:() => import('./feature/feature.module').then(m => m.FeatureModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
