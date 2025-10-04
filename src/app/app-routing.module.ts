import { TemoignageComponent } from './front-office/temoignage/temoignage.component'
import { ProductsComponent } from './front-office/products/products.component'
import { GalleryComponent } from './front-office/gallery/gallery.component'
import { FooterComponent as FooterLandingComponent } from './front-office/footer/footer.component'
import { EventsComponent } from './front-office/events/events.component'
import { ContactComponent } from './front-office/contact/contact.component'
import { TechnicianComponent } from './front-office/technician/technician.component'
import { AboutUsComponent } from './front-office/about-us/about-us.component'
import { HomeComponent } from './front-office/home/home.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

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
      path: 'technicians',
      component: TechnicianComponent
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
      component: FooterLandingComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'temoignage',
      component: TemoignageComponent
    },
  
    {
    path: 'auth',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
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
