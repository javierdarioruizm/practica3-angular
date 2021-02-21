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

  constructor(private servicioService: ServicioService) {

    this.seleccionada = false;
  }


  async ngOnInit() {
    try {
      this.listaPosts = await this.servicioService.getAllPosts();
      console.log(this.listaPosts);

    } catch (error) {
      console.log(error);
    }

    this.listaCategorias = this.servicioService.getCategorias();

  }


}
