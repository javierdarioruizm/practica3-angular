import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaPosts: Post[];
  listaCategorias: string[];
  categoriaSelec: string;
  seleccionada: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
