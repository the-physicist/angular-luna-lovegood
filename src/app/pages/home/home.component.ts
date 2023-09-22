import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { harryPotterData } from '../../data/harryPotterData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cardsData = [
    {
      id: '1',
      articleImage:
        'https://w0.peakpx.com/wallpaper/323/403/HD-wallpaper-evanna-lynch-girl-actress-blonde-luna-lovegood.jpg',
      articleTitle: 'Eu e meu sorrisinho tímido',
    },
    {
      id: '2',
      articleImage: 'https://images4.alphacoders.com/819/81924.jpg',
      articleTitle: 'Eu de leoãozinho nhac :3',
    },
    {
      id: '3',
      articleImage: 'https://wallpapercave.com/dwp1x/wp1921606.jpg',
      articleTitle: 'Eu e meu patrono',
    },
    {
      id: '4',
      articleImage: 'https://wallpapercave.com/dwp1x/wp1921611.jpg',
      articleTitle: 'Eu fazendo carão',
    },
    {
      id: '5',
      articleImage: 'https://wallpapercave.com/dwp1x/wp1921619.jpg',
      articleTitle: 'Eu míope',
    },
    {
      id: '6',
      articleImage: 'https://wallpaperaccess.com/full/2130212.jpg',
      articleTitle: 'Eu lendo de cabeça pra baixoo kkkk"',
    },
    {
      id: '7',
      articleImage: 'https://wallpaperset.com/w/full/5/1/c/165549.jpg',
      articleTitle: 'Eu estilosah',
    },
    {
      id: '8',
      articleImage: 'https://wallpaperset.com/w/full/c/a/4/165596.jpg',
      articleTitle: 'Eu segurando a vara',
    },
    {
      id: '9',
      articleImage: 'https://wallpaperset.com/w/full/b/4/9/165631.jpg',
      articleTitle: 'Eu e meu Rayban',
    },
    {
      id: '10',
      articleImage: 'https://wallpaperset.com/w/full/9/a/c/165670.jpg',
      articleTitle: 'Eu wingardileviossa',
    },
  ];
}
