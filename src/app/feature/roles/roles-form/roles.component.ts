import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from '../roles';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  constructor(
    private rolesService: RolesService,
    private activatedRoute: ActivatedRoute
  ) {}

  initialForm: Rol = {
    id: 0,
    name: '',
    admin: false,
    created: new Date(),
    updated: new Date(),
    enable: false,
    archived: false,
  };

  form: Rol = this.initialForm;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  save(): void {
    this.rolesService.save(this.form).subscribe(() => {
      this.form = this.initialForm;
    });
  }

  findById(id: number): void {
    this.rolesService.findById(id).subscribe((res) => {
      this.form = res;
    });
  }
  deleteById(): void {
    this.rolesService.deleteById(this.form.id).subscribe(() => {
      console.log('Borrado');
    });
  }
}
