import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from '../roles';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
})
export class RolesComponent implements OnInit {
  constructor(
    private rolesService: RolesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  initialForm: Rol = {
    id: 0,
    name: '',
    admin: false,
    created: new Date(),
    updated: new Date(),
    enabled: false,
    archived: false,
    categoriaActividadId: 0,
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
    this.router.navigate(['/layout/roles-list']);
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
