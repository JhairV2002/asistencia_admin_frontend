//revisar findById por si no sirve

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from '../../actividad/actividad';
import { ActividadService } from '../../actividad/actividad.service';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria.form.component.html',
})
export class CategoriaFormComponent implements OnInit {
  constructor(
    private CategoriaService: CategoriaService,
    private actividadService: ActividadService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  currentEntity: Categoria = {
    categoriaActividadId: 0,
    nombre: '',
    secuencia: '',
    color: '',
    created: new Date(),
    updated: new Date(),
    enabled: true,
    archived: true,
    rolId: 0,
    actividades: [],
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  save(): void {
    console.table(this.currentEntity);
    this.CategoriaService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        categoriaActividadId: 0,
        nombre: '',
        secuencia: '',
        color: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: true,
        rolId: 0,
        actividades: [],
      };
      this.router.navigate(['/layout/categoria-list']);
    });
  }

  findById(id: number): void {
    this.actividadService.findById(id).subscribe((response) => {
      this.currentEntity = response;
      this.currentEntity.actividades.forEach((acti) => {
        this.actividadService
          .findById(acti.actividadId)
          .subscribe((item) => (acti.nombre = item.nombre));
      });
    });
  }

  deleteById(): void {
    this.CategoriaService.deleteById(
      this.currentEntity.categoriaActividadId
    ).subscribe(() => {
      console.log('Borrado');
      //redireccionar ....
    });
  }

  removeActividad(id: number) {
    this.currentEntity.actividades = this.currentEntity.actividades.filter(
      (item) => {
        item.actividadId !== id;
      }
    );
  }
}
