import { Component} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  cards = [
    {url: '../../assets/cards/Austria.jpg'},
    {url: '../../assets/cards/Czech.jpg'},
    {url: '../../assets/cards/Finland.jpg'},
    {url: '../../assets/cards/France.jpg'},
    {url: '../../assets/cards/Germany.jpg'},
    {url: '../../assets/cards/Greece.jpg'},
    {url: '../../assets/cards/Italy.jpg'},
    {url: '../../assets/cards/Netherlands.jpg'},
    {url: '../../assets/cards/Norway.jpg'},
    {url: '../../assets/cards/Spain.jpg'},
    {url: '../../assets/cards/Sweden.jpg'},
    {url: '../../assets/cards/Switzerland.jpg'},
  ];
}

