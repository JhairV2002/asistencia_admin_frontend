import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
@Component({
  selector: 'app-categoria-combobox',
  templateUrl: './categoria-combobox.component.html'
})
export class CategoriasComboboxComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService
  ) { }

  cities: Categoria[] = [];
  @Output() categoriaIdEmitter = new EventEmitter<number>();
  @Input() categoriaId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.categoriaService.findAll().subscribe(
      (respose) => this.cities = respose
    )
  }

  public onSelect(id:string){
    console.log("El id de la ciudad es:" + id);
    this.categoriaIdEmitter.emit(parseInt(id));
  }

}