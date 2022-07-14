import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaFestivoComponent } from './diaFestivo/diaFestivo.component';

const routes: Routes = [
  {path: 'diaFestivo', component:DiaFestivoComponent},
  {path: 'diaFestivo/:id', component:DiaFestivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
