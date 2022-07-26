import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaFestivoFormComponent } from '../feature/diaFestivo/form/diaFestivo.form.component';
import { DiaFestivoListComponent } from '../feature/diaFestivo/list/diaFestivo-list.component';
import { CategoriaFormComponent } from '../feature/categoria/form/categoria.form.component';
import { CategoriaListComponent } from '../feature/categoria/list/categoria-list.component';
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
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
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
