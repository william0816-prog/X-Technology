import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit{
  formulariodeempleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ){

    this.formulariodeempleados=this.formulario.group({
nombre:[''],
correo:['']
    });
  }

ngOnInit(): void {
  
}
 enviarDatos():any{
  console.log("Me Presionaste");
  console.log(this.formulariodeempleados.value);
  this.crudService.Agregarempleado(this.formulariodeempleados.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('listar-empleado');
  });
 }
}