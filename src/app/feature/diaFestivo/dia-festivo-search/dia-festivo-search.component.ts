import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiaFestivo } from '../diaFestivo';
import { DiaFestivoService } from '../diaFestivo.service';

@Component({
  selector: 'app-dia-festivo-search',
  templateUrl: './dia-festivo-search.component.html',
  styleUrls: ['./dia-festivo-search.component.css'],
})
export class DiaFestivoSearchComponent implements OnInit {
  constructor(private diasFestivosService: DiaFestivoService) {}

  diasFestivos: DiaFestivo[] = [];

  @Output() diaFestivoEmitter = new EventEmitter<DiaFestivo>();

  onInput(term: string) {
    if (term.length >= 2) {
      this.diasFestivosService
        .findByName(term)
        .subscribe((res) => (this.diasFestivos = res));
    }
    if (term.length === 0) this.diasFestivos = [];
  }

  onSelect(diaFestivo: DiaFestivo) {
    this.diaFestivoEmitter.emit(diaFestivo);
  }

  ngOnInit(): void {}
}
