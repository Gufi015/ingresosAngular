import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingresos.model';
import { IngresoServicio } from './ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos: Ingreso[]=[];

  constructor(private ingresosServicio:IngresoServicio) { }

  ngOnInit() {

    this.ingresos = this.ingresosServicio.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){

    this.ingresosServicio.eliminar(ingreso);

  }

}
