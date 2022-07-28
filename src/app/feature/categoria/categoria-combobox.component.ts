import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';  //Cambiar a categoriaActividadId en caso de error con la base de datos xd
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria-combobox',
  templateUrl: './categoria-combobox.component.html'
})
export class CategoriaComboboxComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService
  ) { }

  categorias: Categoria[] = [];
  @Output() categoriaIdEmitter = new EventEmitter<number>();
  @Input() categoriaId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.categoriaService.findAll().subscribe(
      (respose: Categoria[]) => this.categorias = respose
    )
  }

  public onSelect(id:string){
    console.log("El id de la categoria es:" + id);
    this.categoriaIdEmitter.emit(parseInt(id));
  }

}
