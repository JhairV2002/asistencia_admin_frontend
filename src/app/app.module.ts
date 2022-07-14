import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { DiaFestivoComponent } from './diaFestivo/diaFestivo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ActividadComponent } from './actividad/actividad.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DiaFestivoComponent,
    CategoriaComponent,
    RolesComponent,
    ActividadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
