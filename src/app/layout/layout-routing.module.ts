import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
