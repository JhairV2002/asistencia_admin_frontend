import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { RolesComponent } from './roles/roles-form/roles.component';
import { FormsModule } from '@angular/forms';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { ToolbarRolesComponent } from './roles/toolbar-roles/toolbar-roles.component';
import { PersonComponent } from './person/person-form/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonToolbarComponent } from './person/person-toolbar/person-toolbar.component';

@NgModule({
  declarations: [
    RolesComponent,
    RolesListComponent,
    ToolbarRolesComponent,
    PersonComponent,
    PersonListComponent,
    PersonToolbarComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
