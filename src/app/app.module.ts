import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './Components/menu-nav/menu-nav.component';
import { BlogTitleComponent } from './Components/blog-title/blog-title.component';
import { FeatureCardComponent } from './Components/feature-card/feature-card.component';
import { RegularCardComponent } from './Components/regular-card/regular-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleContentComponent } from './pages/article-content/article-content.component';
import { LightningAnimationComponent } from './Components/lightning-animation/lightning-animation.component';
import { BlogFooterComponent } from './Components/blog-footer/blog-footer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    BlogTitleComponent,
    FeatureCardComponent,
    RegularCardComponent,
    HomeComponent,
    ArticleContentComponent,
    LightningAnimationComponent,
    BlogFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
