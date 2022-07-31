import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/feature/roles/roles.service';
import { Rol } from '../../roles/roles';

@Component({
  selector: 'app-combobox-roles',
  templateUrl: './combobox-roles.component.html',
})
export class ComboboxRolesComponent implements OnInit {

  constructor(
    private rolesService: RolesService
  ) {}

  roles: Rol[] = [];

  ngOnInit(): void {
    this.findAll
  }

  public findAll():void{
    this.rolesService.findAll().subscribe(
      (response) => this.roles = response
    )
  }
}
