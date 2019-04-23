import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './egresos.model';
import { EgresoServicio } from './egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[]=[];
  @Input() ingresoTotal:number;

  constructor(private egresosServicio: EgresoServicio) { }

  ngOnInit() {
    this.egresos = this.egresosServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresosServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  }

}
