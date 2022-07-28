import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ActividadFormComponent } from './actividad/form/actividad.form.component';
import { FormsModule } from '@angular/forms';
import { ActividadListComponent } from './actividad/list/actividad-list.component';
import { ActividadToolbarComponent } from './actividad/toolbar/actividad-toolbar.component';

@NgModule({
  declarations: [
    ActividadFormComponent,
    ActividadListComponent,
    ActividadToolbarComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
