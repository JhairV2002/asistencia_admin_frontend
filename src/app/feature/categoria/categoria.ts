import { Actividad } from '../actividad/actividad';

export interface Categoria {
  categoriaActividadId: number;
  nombre: string;
  secuencia: string;
  color: string;
  created: Date;
  updated: Date;
  enabled: boolean;
  archived: boolean;
  rolId: number;
  actividades: Actividad[];
}
