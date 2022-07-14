import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [AppComponent, RolesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
=======
import { DiaFestivoComponent } from './diaFestivo/diaFestivo.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DiaFestivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
>>>>>>> dias_feriados
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
