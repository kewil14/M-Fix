import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front-office/header/header.component';
import { HomeComponent } from './front-office/home/home.component';
import { AboutUsComponent } from './front-office/about-us/about-us.component';
import { ProductsComponent } from './front-office/products/products.component';
import { TemoignageComponent } from './front-office/temoignage/temoignage.component';
import { EventsComponent } from './front-office/events/events.component';
import { TechnicianComponent } from './front-office/technician/technician.component';
import { GalleryComponent } from './front-office/gallery/gallery.component';
import { ContactComponent } from './front-office/contact/contact.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModuleModule } from './shared-module/shared-module.module';

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
    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
