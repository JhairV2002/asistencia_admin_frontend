import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiaFestivo } from './diaFestivo';
import { DiaFestivoService } from './diaFestivo.service';

@Component({
  selector: 'app-diaFestivo',
  templateUrl: './diaFestivo.component.html'
})
export class DiaFestivoComponent implements OnInit {

  constructor(
    private diaFestivoService: DiaFestivoService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: DiaFestivo =
  {
    dayId: 0,
    name: "",
    date: new Date(),
    created: new Date(),
    updated: new Date(),
    archived: false,
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
    this.diaFestivoService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          dayId: 0,
          name: "",
          date: new Date(),
          created: new Date(),
          updated: new Date(),
          archived: false,
          enabled: true
        };
      }
    )
  }

  findById(id: number):void {
    this.diaFestivoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.diaFestivoService.deleteById(this.currentEntity.dayId).subscribe(
      () => {
      }
    )
  }

}
