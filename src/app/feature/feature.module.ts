import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { DiaFestivoFormComponent } from './holyday/form/diaFestivo.form.component';
import { DiaFestivoListComponent } from './holyday/list/diaFestivo-list.component';
import { DiaFestivoToolbarComponent } from './holyday/toolbar/diaFestivo-toolbar.component';
import { CategoriaFormComponent } from './category/form/categoria.form.component';
import { FormsModule } from '@angular/forms';
import { CategoriaListComponent } from './category/list/categoria-list.component';
import { CategoriaToolbarComponent } from './category/toolbar/categoria-toolbar.component';
import { ActividadFormComponent } from './activity/form/actividad.form.component';
import { ActividadListComponent } from './activity/list/actividad-list.component';
import { ActividadToolbarComponent } from './activity/toolbar/actividad-toolbar.component';
import { PersonComponent } from './person/person-form/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonToolbarComponent } from './person/person-toolbar/person-toolbar.component';

import { PersonSearchComponent } from './person/person-search/person-search.component';
import { RolesComponent } from './role/role-form/roles.component';
import { RolesListComponent } from './role/role-list/roles-list.component';
import { ToolbarRolesComponent } from './role/toolbar-role/toolbar-roles.component';
import { CategoriaComboboxComponent } from './category/category-combobox/categoria-combobox.component';
import { DiaFestivoSearchComponent } from './holyday/holidays-search/dia-festivo-search.component';
import { RolComboboxComponent } from './role/rol-combobox.component';
import { ActividadSearchComponent } from './activity/activivity-search/actividad-search.component';
import { CategoriaSearchComponent } from './category/category-search/categoria-search.component';
import { ComboboxRolesComponent } from './holyday/combobox_role/combobox-roles.component';
@NgModule({
  declarations: [
  DiaFestivoFormComponent,
  DiaFestivoListComponent,
  DiaFestivoToolbarComponent,
  CategoriaFormComponent,
  CategoriaListComponent,
  CategoriaToolbarComponent,
  RolesComponent,
  RolesListComponent,
  ToolbarRolesComponent,
  ActividadFormComponent,
  ActividadListComponent,
  ActividadToolbarComponent,
  PersonComponent,
  PersonListComponent,
  PersonToolbarComponent,
  CategoriaComboboxComponent,
  DiaFestivoSearchComponent,
  RolComboboxComponent,
  ActividadSearchComponent,
  CategoriaSearchComponent,
  ComboboxRolesComponent,
  PersonSearchComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
