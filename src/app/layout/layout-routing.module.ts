import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadFormComponent } from '../feature/actividad/form/actividad.form.component';
import { ActividadListComponent } from '../feature/actividad/list/actividad-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      { path: 'actividad-form', component: ActividadFormComponent },
      { path: 'actividad-form/:id', component: ActividadFormComponent },
      { path: 'actividad-list', component: ActividadListComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
