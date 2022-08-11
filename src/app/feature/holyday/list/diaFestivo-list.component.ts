import { Component, OnInit } from '@angular/core';
import { DiaFestivo } from '../diaFestivo';
import { DiaFestivoService } from '../diaFestivo.service';

@Component({
  selector: 'app-diaFestivo-list',
  templateUrl: './diaFestivo-list.component.html',
})
export class DiaFestivoListComponent implements OnInit {

  constructor(
    private diaFestivoService: DiaFestivoService
  ) { }

  diaFestivoList: DiaFestivo[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.diaFestivoService.findAll().subscribe(
      (response) => this.diaFestivoList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.diaFestivoService.findByName(term).subscribe(
        (response) => this.diaFestivoList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}
