import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './feature/actividad/actividad.component';

const routes: Routes = [
  {path: 'actividad', component:ActividadComponent},
  {path: 'actividad/:id', component:ActividadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
