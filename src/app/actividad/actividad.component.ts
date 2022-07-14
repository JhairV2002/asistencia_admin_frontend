import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actividad } from './actividad';
import { ActividadService } from './actividad.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html'
})
export class ActividadComponent implements OnInit {

  constructor(
    private actividadService: ActividadService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Actividad =
  {
    actividadId: 0,
    nombre: "",
    categoria: "",
    created: new Date(),
    updated: new Date(),
    archivate:false,
    enabled: true
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.actividadService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          actividadId: 0,
          nombre: "",
          categoria: "",
          created: new Date(),
          updated: new Date(),
          archivate:false,
          enabled: true
        };
      }
    )
  }

  findById(id: number):void {
    this.actividadService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.actividadService.deleteById(this.currentEntity.actividadId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
