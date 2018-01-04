import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(movies: any[], filter: Object): any {
    if(!movies || !filter){
      return movies;
    }
    filter = filter ? filter.toString().toLowerCase():movies;
    // filter items array, items which match and return true will be
      // kept, false will be filtered out
      return movies.filter(movie => movie.title.toString().toLowerCase().indexOf(filter) !== -1);
  }    

}
