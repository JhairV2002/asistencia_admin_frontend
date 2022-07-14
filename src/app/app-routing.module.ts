import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { RolesComponent } from './roles/roles.component';
import { DiaFestivoComponent } from './diaFestivo/diaFestivo.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'roles/:id',
    component: RolesComponent,
  },
  { path: 'diaFestivo', component: DiaFestivoComponent },
  { path: 'diaFestivo/:id', component: DiaFestivoComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/:id', component: CategoriaComponent },
=======
import { ActividadComponent } from './actividad/actividad.component';

const routes: Routes = [
  {path: 'actividad', component:ActividadComponent},
  {path: 'actividad/:id', component:ActividadComponent}
>>>>>>> actividades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
