import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
elID:any;
formulariodeempleados:FormGroup;

constructor(
  private activeRoute:ActivatedRoute,
  private crudService:CrudService,
  public formulario:FormBuilder,
  private ruteador:Router
  ){
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.obtenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formulariodeempleados.setValue({
          nombre:respuesta[0] ['nombre'],
          correo:respuesta[0] ['correo']
        });
      }
       );
          this.formulariodeempleados=this.formulario.group (
    {
     nombre:[''],
     correo:['']
   }
          );
}
  ngOnInit(): void {
  
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formulariodeempleados.value);
    this.crudService.EditarEmpleado(this.elID,this.formulariodeempleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
}
  

