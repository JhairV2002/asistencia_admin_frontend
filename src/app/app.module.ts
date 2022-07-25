import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RolesComponent } from './roles/roles.component';
import { DiaFestivoComponent } from './diaFestivo/diaFestivo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ActividadComponent } from './actividad/actividad.component';
=======
>>>>>>> origin/dias_feriados
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    DiaFestivoComponent,
    CategoriaComponent,
    RolesComponent,
    ActividadComponent,
=======
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
>>>>>>> origin/dias_feriados
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
