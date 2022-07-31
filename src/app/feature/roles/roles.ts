export interface Rol {
  id: number;
  name: string;
  admin: boolean;
  created: Date;
  updated: Date;
  enabled: boolean;
  archived: boolean;
  categoriaActividadId: number;
}
