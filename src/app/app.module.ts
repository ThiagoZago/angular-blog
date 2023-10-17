import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigTitleImageComponent } from './components/big-title-image/big-title-image.component';
import { ReadMoreCardComponent } from './components/read-more-card/read-more-card.component';
import { HistoryImgComponent } from './components/history-img/history-img.component';
import { ShortContentComponent } from './components/short-content/short-content.component';
import { ReadCaseRIGHTCardComponent } from './components/read-case-right-card/read-case-right-card.component';
import { ReadCaseLEFTCardComponent } from './components/read-case-left-card/read-case-left-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ContactsBarComponent } from './components/contacts-bar/contacts-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigTitleImageComponent,
    ReadMoreCardComponent,
    HistoryImgComponent,
    ShortContentComponent,
    ReadCaseRIGHTCardComponent,
    ReadCaseLEFTCardComponent,
    NewsCardComponent,
    ContactsBarComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
