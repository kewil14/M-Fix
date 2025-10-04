import { TemoignageComponent } from './yummy/temoignage/temoignage.component'
import { ProductsComponent } from './yummy/products/products.component'
import { GalleryComponent } from './yummy/gallery/gallery.component'
import { FooterComponent as FooterLandingComponent } from './yummy/footer/footer.component'
import { EventsComponent } from './yummy/events/events.component'
import { ContactComponent } from './yummy/contact/contact.component'
import { TechnicianComponent } from './yummy/technician/technician.component'
import { AboutUsComponent } from './yummy/about-us/about-us.component'
import { HomeComponent } from './yummy/home/home.component'
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
