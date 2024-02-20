import { TemoignageComponent } from './yummy/temoignage/temoignage.component';
import { MenusComponent } from './yummy/menus/menus.component';
import { GalleryComponent } from './yummy/gallery/gallery.component';
import { FooterComponent } from './yummy/footer/footer.component';
import { EventsComponent } from './yummy/events/events.component';
import { ContactComponent } from './yummy/contact/contact.component';
import { ChefsComponent } from './yummy/chefs/chefs.component';
import { BookATableComponent } from './yummy/book-atable/book-atable.component';
import { AboutUsComponent } from './yummy/about-us/about-us.component';
import { HomeComponent } from './yummy/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'accueil',
      pathMatch: 'full'
    },

    {
      path : 'accueil',
      component: HomeComponent
    },
    {
      path: 'aboutUS',
      component: AboutUsComponent

    },
    {
      path: 'chefs',
      component: ChefsComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'events',
      component: EventsComponent
    },
    {
      path: 'footer',
      component: FooterComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'menus',
      component: MenusComponent
    },
    {
      path: 'temoignage',
      component: TemoignageComponent
    },
    {
      path: 'bookatable',
      component: BookATableComponent
  },
    {
    path: 'auth',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
    },
    {
      path: 'admin',
      component: LayoutComponent,
      loadChildren: () => import('./management/management.module').then(m => m.ManagementModule),
    },
    {
      path: "**",
      redirectTo:"accueil",
      pathMatch:"full"
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
