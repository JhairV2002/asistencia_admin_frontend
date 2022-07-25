import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria.form.component.html'
})
export class CategoriaFormComponent implements OnInit {

  constructor(
    private CategoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Categoria = 
  {
    categoriaActividadId: 0,
    nombre: "",
    secuencia: "",
    color: "",
    created: new Date(),
    updated: new Date(),
    enabled: true,
    archived: true,
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
    this.CategoriaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity = 
        {
          categoriaActividadId: 0,
          nombre: "",
          secuencia: "",
          color: "",
          created: new Date(),
          updated: new Date(),
          enabled: true,
          archived: true
        };
      }
    )
  }

  findById(id: number):void {
    this.CategoriaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.CategoriaService.deleteById(this.currentEntity.categoriaActividadId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
