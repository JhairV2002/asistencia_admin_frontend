export interface Actividad {
    actividadId: number,
    nombre: string,
    categoria: number,
   festividades: DiasFestivos[],
    created: Date,
    updated: Date,
    archivate:boolean,
    enabled: boolean
}
