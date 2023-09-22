import {
  Component,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @Input()
  id: string = '1';
  @Input()
  featureImgCover: string =
    'https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg';
  @Input()
  featureCardTitle: string = 'Insira o título da notícia aqui!';
  @Input()
  featureCardDescription: string = 'Insira a legenda da notícia aqui!';

  // @HostListener('document:mouseover', ['$event'])
  // mouseover(event: any) {
  //   const hoverElement = event.target;
  //   if (hoverElement.classList.contains('feature-card__cover')) {
  //     const cardTitle = hoverElement.parentElement.querySelector(
  //       '.feature-card__title'
  //     );
  //     if (cardTitle) {
  //       cardTitle.style.display = 'block';
  //     }
  //   }
  // }
}

// Manual way of showing the card using inline directive

// onHoverCard() {
//   let card = document.querySelectorAll<HTMLElement>('.feature-card__title');
//   card[0].style.display = 'block';
// }

// First attempt to show the card using matches and array

// @HostListener('document:mouseover', ['$event'])
// mouseover(event: { target: { matches: (arg0: string) => any } }) {
//   if (event.target.matches('.feature-card__cover')) {
//     let card = document.querySelectorAll<HTMLElement>('.feature-card__title');
//     card[0].style.display = 'block';
//   }
// }

// Use it to apply the hover effect to all cards simoultaneously

// @HostListener('document:mouseover', ['$event'])
// onMouseOver(event: any) {
//   if (event.target.classList.contains('feature-card__cover')) {
//     const cards = document.querySelectorAll('.feature-card__title');

//     cards.forEach((card) => {
//       this.renderer.setStyle(card, 'display', 'block');
//     });
//   }
// }
