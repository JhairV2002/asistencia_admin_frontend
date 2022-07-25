import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DiaFestivoFormComponent } from './diaFestivo/form/diaFestivo.form.component';
import { FormsModule } from '@angular/forms';
import { DiaFestivoListComponent } from './diaFestivo/list/diaFestivo-list.component';
import { DiaFestivoToolbarComponent } from './diaFestivo/toolbar/diaFestivo-toolbar.component';


@NgModule({
  declarations: [
    DiaFestivoFormComponent,
    DiaFestivoListComponent,
    DiaFestivoToolbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
