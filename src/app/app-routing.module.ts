import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { DiaFestivoComponent } from './diaFestivo/diaFestivo.component';

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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
