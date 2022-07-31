import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaFestivoFormComponent } from '../feature/diaFestivo/form/diaFestivo.form.component';
import { DiaFestivoListComponent } from '../feature/diaFestivo/list/diaFestivo-list.component';
import { CategoriaFormComponent } from '../feature/categoria/form/categoria.form.component';
import { CategoriaListComponent } from '../feature/categoria/list/categoria-list.component';
import { ActividadFormComponent } from '../feature/actividad/form/actividad.form.component';
import { ActividadListComponent } from '../feature/actividad/list/actividad-list.component';
import { PersonComponent } from '../feature/person/person-form/person.component';
import { PersonListComponent } from '../feature/person/person-list/person-list.component';
import { RolesListComponent } from '../feature/roles/roles-list/roles-list.component';
import { RolesComponent } from '../feature/roles/roles-form/roles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'diaFestivo-form', component: DiaFestivoFormComponent },
      { path: 'diaFestivo-form/:id', component: DiaFestivoFormComponent },
      { path: 'diaFestivo-list', component: DiaFestivoListComponent },
      { path: 'categoria-form', component: CategoriaFormComponent },
      { path: 'categoria-form/:id', component: CategoriaFormComponent },
      { path: 'categoria-list', component: CategoriaListComponent },
      { path: 'dashboard', component: DashboardComponent },

      {
        path: 'roles-form',
        component: RolesComponent,
      },
      {
        path: 'roles-form/:id',
        component: RolesComponent,
      },
      {
        path: 'roles-list',
        component: RolesListComponent,
      },
      { path: 'actividad-form', component: ActividadFormComponent },
      { path: 'actividad-form/:id', component: ActividadFormComponent },
      { path: 'actividad-list', component: ActividadListComponent },
      {
        path: 'person-form',
        component: PersonComponent,
      },
      {
        path: 'person-form/:id',
        component: PersonComponent,
      },
      {
        path: 'person-list',
        component: PersonListComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
