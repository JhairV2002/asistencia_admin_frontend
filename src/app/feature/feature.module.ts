import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CategoriaFormComponent } from './categoria/form/categoria.form.component';
import { FormsModule } from '@angular/forms';
import { CategoriaListComponent } from './categoria/list/categoria-list.component';
import { CategoriaToolbarComponent } from './categoria/toolbar/categoria-toolbar.component';
import { CategoriaComboboxComponent } from './categoria/categoria-combobox.component';


@NgModule({
  declarations: [
    CategoriaFormComponent,
    CategoriaListComponent,
    CategoriaToolbarComponent,
    CategoriaComboboxComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
