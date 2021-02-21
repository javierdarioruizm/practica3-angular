import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/post.interface';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  listaPosts: Post[];
  formulario: FormGroup;

  constructor(private servicioService: ServicioService) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required

      ]),
      texto: new FormControl('', [
        Validators.required,

      ]),
      autor: new FormControl('', [
        Validators.required,

      ]),
      imagen: new FormControl('', [
        Validators.required,

      ]),
      fecha: new FormControl('', [
        Validators.required,

      ]),
      categoria: new FormControl('', [
        Validators.required,

      ]),

    })


  }

  ngOnInit(): void {
  }

}
