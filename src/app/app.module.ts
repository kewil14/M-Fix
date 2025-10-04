import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './yummy/header/header.component';
import { HomeComponent } from './yummy/home/home.component';
import { AboutUsComponent } from './yummy/about-us/about-us.component';
import { ProductsComponent } from './yummy/products/products.component';
import { TemoignageComponent } from './yummy/temoignage/temoignage.component';
import { EventsComponent } from './yummy/events/events.component';
import { TechnicianComponent } from './yummy/technician/technician.component';
import { GalleryComponent } from './yummy/gallery/gallery.component';
import { ContactComponent } from './yummy/contact/contact.component';
import { FooterComponent } from './yummy/footer/footer.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    TemoignageComponent,
    EventsComponent,
    TechnicianComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbCarouselModule,
    CoreModule,
    TranslateModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
