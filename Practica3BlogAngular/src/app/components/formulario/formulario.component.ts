import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  listaPosts: Post[];
  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
