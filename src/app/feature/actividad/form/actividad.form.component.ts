import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';
import { DiasFestivos} from '../../diasfestivos/diasfestivos';
import { DiasFestivos } from '../../diasfestivos/diasfestivos.service';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad.form.component.html'
})
export class ActividadFormComponent implements OnInit {

  constructor(
    private actividadService: ActividadService,
    private activatedRoute: ActivatedRoute,
    private diasfestivosService: DiasFestivosService,
    private router:Router
  ) { }

  currentEntity: Actividad =
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
      (response) => {
        this.currentEntity = response;
        this.currentEntity.festividades.forEach(
          (auth) => {
            this.diasfestivosService.findById(auth.id).subscribe(
              (item) => auth.name = item.name
            )
          }
        )
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
  removeAuthority(id: number):void {

    this.currentEntity.festividades =
    this.currentEntity.festividades.filter(
      (item) => item.id != id 
    );
  }

}
