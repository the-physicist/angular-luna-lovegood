import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-blog';

  // @HostListener('document:mouseover', ['$event'])
  // mouseover(event: any) {
  //   const hoverElement = event.target;
  //   if (
  //     hoverElement.classList.contains('feature-card__cover') ||
  //     hoverElement.classList.contains('regular-card__cover')
  //   ) {
  //     const cardTitle =
  //       hoverElement.parentElement.querySelector('.hover-card__title');
  //     if (cardTitle) {
  //       cardTitle.style.display = 'block';
  //     }
  //   }
  // }
}
