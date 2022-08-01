import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-combobox',
  templateUrl: './categoria-combobox.component.html',
  styleUrls: ['./categoria-combobox.component.css'],
})
export class CategoriaComboboxComponent implements OnInit {
  constructor(private categoriaService: CategoriaService) {}

  categorias: Categoria[] = [];

  @Output() categoriaIdEmitter = new EventEmitter<number>();
  @Input() categoriaActividadId: number = 0;

  public findAll() {
    this.categoriaService.findAll().subscribe((res) => (this.categorias = res));
  }

  public onSelect(id: string) {
    this.categoriaIdEmitter.emit(parseInt(id));
  }

  ngOnInit(): void {
    this.findAll();
  }
}
