import { Injectable } from '@angular/core';
import { Post } from './post.interface';

declare var Swal; // 

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  nuevoPost: Post;
  private listaPosts: Post[];

  constructor() {

    // Compruebo si tengo el array en LocalStorage y en caso afirmativo lo recupero

    if (localStorage.getItem('ArrPosts')) {
      this.listaPosts = JSON.parse(localStorage.getItem('ArrPosts'));

    } else {

      this.listaPosts = [


        { titulo: 'Mallorca se viste de blanco: ¡sus almendros ya florecen!', texto: 'La isla balear cuenta con unos siete millones de almendros repartidos por algunas áreas rurales de la isla y que a partir de febrero comienzan a despertar del letargo del invierno, a vestirse con sus mejores galas hechas de flor y a hacer que el paisaje de Mallorca se ponga, si cabe, más guapo.', autor: 'Javier Ruiz', imagen: 'https://aws.traveler.es/prod/designs/v1/assets/745x497/201772.jpg', fecha: '20/02/2021', categoria: 'Naturaleza' },
        { titulo: 'Qué comer (y dónde) para celebrar el Año Nuevo Chino en Madrid', texto: '¡Feliz Año Nuevo Chino! ¡Feliz año del buey de oro! Acudimos a hosteleros, gastronónomos y a nuestros referentes madrileños de origen chino para que nos cuenten qué platos comer y dónde comerlos.', autor: 'Raquel Vázquez', imagen: 'https://aws.traveler.es/prod/designs/v1/assets/940x627/201698.jpg', fecha: '05/02/2021', categoria: 'Gastronomía' },
        { titulo: 'Szentendre, esencia balcánica a un salto de Budapest', texto: 'El Danubio, muchas iglesias y más arte: ¿qué tal una escapada a este pueblito húngaro de postal?    Iglesias de esbeltas cúpulas, fachadas de colores pastel y arte, mucho arte. Si con estas tres particularidades Szentendre no fuera en un pueblito de desbordante de encanto conquistado por el turismo, es porque algo habría fallado en la ecuación.', autor: 'Inés Castro', imagen: 'https://aws.traveler.es/prod/designs/v1/assets/940x623/192917.jpg', fecha: '20/01/2021', categoria: 'Viajes urbanos' },
        { titulo: '¿Una ballena o un observatorio submarino en Australia?', texto: 'Para dar vida al que se convertirá en el observatorio submarino más grande de Australia, con dos kilómetros de longitud, el estudio de arquitectura londinense Baca Architects ha contado con un presupuesto de 30 millones de dólares australianos.', autor: 'Manuel Rivas', imagen: 'https://aws.traveler.es/prod/designs/v1/assets/940x651/199925.jpg', fecha: '08/12/2020', categoria: 'Experiencias' },
        { titulo: 'Washington o la ciudad vibrante y cosmopolita', texto: 'La guía definitiva para conocer, beber, degustar y perderse en el ambiente hipster de esta fascinante ciudad estadounidense.', autor: 'Javier Ruiz', imagen: 'https://aws.traveler.es/prod/designs/v1/assets/940x693/163439.jpg', fecha: '30/11/2020', categoria: 'Viajes urbanos' },
        { titulo: 'Cómo alcanzar el bienestar y el equilibrio siguiendo la cultura japonesa', texto: 'En estos días tan inciertos e insípidos necesitamos cargar cuerpo y mente de equilibrio, calma y energía para afrontar un invierno que se augura largo, y conseguir así un pacífico y equilibrado 2020. ¿Tarea imposible? ¡Para nada! Tan solo tenemos que recurrir a la cultura japonesa, basada en el bienestar, para aplicarla a nuestro día a día.', autor: 'Manuel Rivas', imagen: 'https://aws.traveler.es/prod/designs/v1/assets/940x627/199453.jpg', fecha: '10/09/2020', categoria: 'Experiencias' },
        { titulo: 'Dónde encontrar los mejores paisajes del mundo para el otoño', texto: 'La mejor vegetación otoñal se puede encontrar en todo el mundo, como telón de fondo de oro para los castillos bávaros y alfombras de ricos rojos y naranjas en la cordillera de Alaska. Incluso encontrarás estos colores otoñales sumergiéndote profundamente en Transilvania y el este de Asia.', autor: 'Inés Castro', imagen: 'https://aws.traveler.es/prod/designs/v1/assets/1000x667/190500.jpg', fecha: '25/10/2020', categoria: 'Naturaleza' }

      ]
      // Llenamos el localStorage con los posts iniciales
      localStorage.setItem('ArrPosts', JSON.stringify(this.listaPosts));

    }

  }


  // Método para obtener todos los posts

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listaPosts);
    });
  }


  // Método para obtener las categorías

  getCategorias(): string[] {

    const arrNuevo = this.listaPosts.map(post => post.categoria);
    return [...new Set(arrNuevo)];
  }

  // Método para filtrar los posts por categoría

  getPostByCategoria(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = [];
      for (let post of this.listaPosts) {
        if (post.categoria === pCategoria) {
          arrFiltrado.push(post);
        }
      }
      resolve(arrFiltrado);
    });
  }


  // Método para agregar un nuevo post al blog

  agregarPost(pPost) {

    return new Promise((resolve, reject) => {
      const nuevoPost = this.listaPosts.splice(0, 0, pPost);
      // Utilizo splice para insertar el nuevo post al principio del array
      localStorage.setItem('ArrPosts', JSON.stringify(this.listaPosts))
      resolve(nuevoPost);
      Swal.fire(
        'Post creado',
        'Has añadido tu nuevo post al blog',
        'success'
      )
      console.log(this.listaPosts);
    });

  }










}
