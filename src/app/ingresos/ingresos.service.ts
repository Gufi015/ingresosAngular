import { Ingreso } from "./ingresos.model";
export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso("Salario", 4000),
    new Ingreso("Venta de Auto", 500)
  ];

  eliminar(ingreso: Ingreso) {
    //Estrae el elemento del array
    const indice: number = this.ingresos.indexOf(ingreso);

    //elimina el elemento obtenido
    this.ingresos.splice(indice, 1);
  }
}
