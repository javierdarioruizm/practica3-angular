import { Injectable } from '@angular/core';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  nuevoPost: Post;
  private listaPosts: Post[];

  constructor() { }
}
