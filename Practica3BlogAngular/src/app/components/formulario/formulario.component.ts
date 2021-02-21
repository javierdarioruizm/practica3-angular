import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  listaPosts: Post[];
  listaCategorias: string[];
  categoriaSelec: string;
  seleccionada: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
