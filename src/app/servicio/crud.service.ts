import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost:3307/empleados/';
  constructor(private clienteHttp:HttpClient) { }

  Agregarempleado(datosempleado:Empleado):Observable<any>{
   return this.clienteHttp.post(this.API+"?insertar=1",datosempleado);
}

 Obtenerempleados(){
  return this.clienteHttp.get(this.API)
 }
 borrarEmpleado(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?borrar=1"+id);
}
obtenerEmpleado(id:any):Observable<any>{
  return this.clienteHttp.get(this.API+"?consultar="+id);
}
EditarEmpleado(id:any, datosempleado:any):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizar="+id,datosempleado);
}
}
