import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';
@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad.form.component.html',
})
export class ActividadFormComponent implements OnInit {
  constructor(
    private ActividadService: ActividadService,
    private activatedRoute: ActivatedRoute
  ) {}

  currentEntity: Actividad = {
    actividadId: 0,
    nombre: '',
    categoria: '',
    created: new Date(),
    updated: new Date(),
    archivate: false,
    enabled: true,
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
    this.ActividadService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        actividadId: 0,
        nombre: '',
        categoria: '',
        created: new Date(),
        updated: new Date(),
        archivate: false,
        enabled: true,
      };
    });
  }

  findById(id: number): void {
    this.ActividadService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }

  deleteById(): void {
    this.ActividadService.deleteById(this.currentEntity.actividadId).subscribe(
      () => {
        console.log('Borrado');
        //redireccionar ....
      }
    );
  }
}
