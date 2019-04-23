import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingresos/ingresos.service';
import { EgresoServicio } from './egresos/egresos.service';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestoComponent,
    IngresosComponent,
    EgresosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    IngresoServicio,
    EgresoServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
