import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaFestivoFormComponent } from '../feature/diaFestivo/form/diaFestivo.form.component';
import { DiaFestivoListComponent } from '../feature/diaFestivo/list/diaFestivo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'diaFestivo-form', component: DiaFestivoFormComponent},
      {path: 'diaFestivo-form/:id', component:DiaFestivoFormComponent},
      {path: 'diaFestivo-list', component:DiaFestivoListComponent},
      {path: 'dashboard', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
