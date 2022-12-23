import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/moives';

@Component({
  selector: 'app-demodirective',
  templateUrl: './demodirective.component.html',
  styleUrls: ['./demodirective.component.css']
})
export class DemodirectiveComponent  {
//ngif
  isshow:boolean = true;

  //ngfor
  title : string = "Top 3 Movies";
  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}
  ]


  

}
