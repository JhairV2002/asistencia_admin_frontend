import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';
import { DiaFestivo} from '../../diaFestivo/diaFestivo';
import { DiaFestivoService } from '../../diaFestivo/diaFestivo.service';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad.form.component.html',
})
export class ActividadFormComponent implements OnInit {
  router: any;
  actividadService: any;
  diasfestivosService: any;
  constructor(
    private ActividadService: ActividadService,
    private activatedRoute: ActivatedRoute
  ) {}

  currentEntity: Actividad = {
    actividadId: 0,
    nombre: "",
    categoria: 0,
    festividades:[],
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
    this.ActividadService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          actividadId: 0,
          nombre: "",
          categoria: 0,
          festividades:[],
          created: new Date(),
          updated: new Date(),
          archivate:false,
          enabled: true
        };
        this.router.navigate(['/layout/actividad-list']);
      }
    )
  }

  findById(id: number):void {
    this.actividadService.findById(id).subscribe(
      (response: Actividad) => {
        this.currentEntity = response;
        this.currentEntity.festividades.forEach(
          (auth) => {
            this.diasfestivosService.findById(auth.id).subscribe(
              (item: { name: any; }) => auth.name = item.name
            )
          }
        )
      }
    )
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
