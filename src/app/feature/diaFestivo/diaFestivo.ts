import { Categoria } from "../categoria/categoria";

export interface DiaFestivo {
  dayId: number,
  name: string,
  date: Date,
  created: Date,
  updated: Date,
  archived: boolean,
  enabled: boolean,
  fkRoles: number,
  categorias: Categoria[],
}
