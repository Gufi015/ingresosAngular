import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {


  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentajeTotal:number;

  constructor() { }

  ngOnInit() {
  }

}
