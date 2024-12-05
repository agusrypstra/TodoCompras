import { Producto } from "./Producto";

export interface Restaurant{
    id:number;
    nombre:string;
    direccion:string;
    telefonos:number;
    productos:Producto[];
}
  