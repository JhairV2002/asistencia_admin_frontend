import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolesComponent } from './roles/roles.component';
import { FormsModule } from '@angular/forms';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { ToolbarRolesComponent } from './roles/toolbar-roles/toolbar-roles.component';

@NgModule({
  declarations: [RolesComponent, RolesListComponent, ToolbarRolesComponent],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
