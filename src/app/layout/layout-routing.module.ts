import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from '../feature/categoria/form/categoria.form.component';
import { CategoriaListComponent } from '../feature/categoria/list/categoria-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent,
    children: [
      {path:'', component: DashboardComponent },
      {path:'categoria-form', component:CategoriaFormComponent},
      {path:'categoria-form/:id', component:CategoriaFormComponent},
      {path:'categoria-list', component:CategoriaListComponent},
      {path:'dashboard', component:DashboardComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
