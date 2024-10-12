import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './yummy/header/header.component';
import { HomeComponent } from './yummy/home/home.component';
import { AboutUsComponent } from './yummy/about-us/about-us.component';
import { MenusComponent } from './yummy/menus/menus.component';
import { TemoignageComponent } from './yummy/temoignage/temoignage.component';
import { EventsComponent } from './yummy/events/events.component';
import { ChefsComponent } from './yummy/chefs/chefs.component';
import { BookATableComponent } from './yummy/book-atable/book-atable.component';
import { GalleryComponent } from './yummy/gallery/gallery.component';
import { ContactComponent } from './yummy/contact/contact.component';
import { FooterComponent } from './yummy/footer/footer.component';
import { LayoutsModule } from './layouts/layouts.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    MenusComponent,
    TemoignageComponent,
    EventsComponent,
    ChefsComponent,
    BookATableComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbCarouselModule,
    LayoutsModule,
    CoreModule,
    TranslateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
