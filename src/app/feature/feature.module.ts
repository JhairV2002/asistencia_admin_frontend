import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DiaFestivoFormComponent } from './diaFestivo/form/diaFestivo.form.component';
import { DiaFestivoListComponent } from './diaFestivo/list/diaFestivo-list.component';
import { DiaFestivoToolbarComponent } from './diaFestivo/toolbar/diaFestivo-toolbar.component';
import { CategoriaFormComponent } from './categoria/form/categoria.form.component';
import { FormsModule } from '@angular/forms';
import { CategoriaListComponent } from './categoria/list/categoria-list.component';
import { CategoriaToolbarComponent } from './categoria/toolbar/categoria-toolbar.component';

@NgModule({
  declarations: [
    DiaFestivoFormComponent,
    DiaFestivoListComponent,
    DiaFestivoToolbarComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    CategoriaToolbarComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
