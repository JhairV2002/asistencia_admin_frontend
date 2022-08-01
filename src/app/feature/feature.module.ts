import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { DiaFestivoFormComponent } from './diaFestivo/form/diaFestivo.form.component';
import { DiaFestivoListComponent } from './diaFestivo/list/diaFestivo-list.component';
import { DiaFestivoToolbarComponent } from './diaFestivo/toolbar/diaFestivo-toolbar.component';
import { CategoriaFormComponent } from './categoria/form/categoria.form.component';
import { RolesComponent } from './roles/roles-form/roles.component';
import { FormsModule } from '@angular/forms';
import { CategoriaListComponent } from './categoria/list/categoria-list.component';
import { CategoriaToolbarComponent } from './categoria/toolbar/categoria-toolbar.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { ToolbarRolesComponent } from './roles/toolbar-roles/toolbar-roles.component';
import { ActividadFormComponent } from './actividad/form/actividad.form.component';
import { ActividadListComponent } from './actividad/list/actividad-list.component';
import { ActividadToolbarComponent } from './actividad/toolbar/actividad-toolbar.component';
import { PersonComponent } from './person/person-form/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonToolbarComponent } from './person/person-toolbar/person-toolbar.component';
import { CategoriaComboboxComponent } from './categoria/categoria-combobox/categoria-combobox.component';
import { DiaFestivoSearchComponent } from './diaFestivo/dia-festivo-search/dia-festivo-search.component';
import { RolComboboxComponent } from './roles/rol-combobox.component';
import { ActividadSearchComponent } from './actividad/actividad-search/actividad-search.component';
import { CategoriaSearchComponent } from './categoria/categoria-search/categoria-search.component';
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
  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
