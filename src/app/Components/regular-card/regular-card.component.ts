import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regular-card',
  templateUrl: './regular-card.component.html',
  styleUrls: ['./regular-card.component.css'],
})
export class RegularCardComponent {
  @Input()
  id: string = '0';
  @Input()
  regularImgCover: string =
    'https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg';
  @Input()
  regularCardTitle: string = 'Insira o título da notícia aqui!';
}
