import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { harryPotterData } from '../../data/harryPotterData';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css'],
})
export class ArticleContentComponent {
  private id: string | null = '';
  articleImage: string = 'https://source.unsplash.com/featured/500x250';
  articleTitle: string = 'INSIRA UM TÍTULO';
  // articleDescription: string = 'INSIRA UMA DESCRIÇÃO';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = harryPotterData.filter(
      (article) => article.id.toString() == id
    )[0];

    this.articleImage = result.articleImage;
    this.articleTitle = result.articleTitle;
    // this.articleDescription = result.articleDescription;
  }
}
