import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  
  // État de chargement
  // isLoading = true;
  
  // Liste des images de la galerie
  // galleryImages = [
  //   'assets/img/images/user.jpg',
  //   'assets/img/images/unlock.jpg',
  //   'assets/img/images/solde.jpg',
  //   'assets/img/images/show.jpg',
  //   'assets/img/images/partner.jpg',
  //   'assets/img/images/jjj.jpg',
  //   'assets/img/images/img.avif',
  //   'assets/img/images/bruno.jpg',
  //   'assets/img/images/bless.jpg',
  //   'assets/img/images/stage.jpg'
  // ];

  // Compteur d'images chargées
  // private loadedImagesCount = 0;
  // private totalImages = this.galleryImages.length;

  constructor() {}

  ngOnInit(): void {
    // Préchargement des images
    // this.preloadImages();

    
  }

  ngAfterViewInit(): void {
    // Initialisation de Swiper après le chargement des images
    // (sera appelé dans checkAllImagesLoaded)

    // reload la location solution provisoire
    // setTimeout(() => {
    //   location.reload()
    //   // console.log('location')
    // }, 500)
  }

  /**
   * Précharge toutes les images de la galerie
   */
  preloadImages(): void {
    // this.galleryImages.forEach(imagePath => {
    //   const img = new Image();
      
    //   // Événement de succès de chargement
    //   img.onload = () => {
    //     this.onImageLoad();
    //   };
      
    //   // Événement d'erreur de chargement
    //   img.onerror = () => {
    //     console.error(`Erreur de chargement de l'image: ${imagePath}`);
    //     this.onImageLoad(); // On compte quand même pour ne pas bloquer
    //   };
      
    //   // Démarre le chargement
    //   img.src = imagePath;
    // });
  }

  /**
   * Appelé à chaque image chargée
   */
  private onImageLoad(): void {
    // this.loadedImagesCount++;
    // this.checkAllImagesLoaded();
  }

  /**
   * Vérifie si toutes les images sont chargées
   */
  private checkAllImagesLoaded(): void {
    // if (this.loadedImagesCount >= this.totalImages) {
    //   // Petit délai pour une transition en douceur
    //   setTimeout(() => {
    //     this.isLoading = false;
    //     this.initSwiper();
    //   }, 300);
    // }
  }

  /**
   * Initialise Swiper après le chargement
   */
  private initSwiper(): void {
    // Attend que le DOM soit mis à jour
    // setTimeout(() => {
    //   // Initialisation de Swiper (si vous utilisez Swiper directement)
    //   // Ou laissez votre initialisation existante se faire
    //   if (typeof (window as any).Swiper !== 'undefined') {
    //     new (window as any).Swiper('.gallery-slider', {
    //       speed: 600,
    //       loop: true,
    //       autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //       },
    //       slidesPerView: 'auto',
    //       pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //       },
    //       breakpoints: {
    //         320: {
    //           slidesPerView: 1,
    //           spaceBetween: 20
    //         },
    //         640: {
    //           slidesPerView: 2,
    //           spaceBetween: 20
    //         },
    //         992: {
    //           slidesPerView: 3,
    //           spaceBetween: 20
    //         },
    //         1200: {
    //           slidesPerView: 4,
    //           spaceBetween: 20
    //         }
    //       }
    //     });
    //   }

    //   // Initialisation de GLightbox (si vous l'utilisez)
    //   if (typeof (window as any).GLightbox !== 'undefined') {
    //     (window as any).GLightbox({
    //       selector: '.glightbox'
    //     });
    //   }
    // }, 100);
  }

  /**
   * Obtient le pourcentage de chargement
   */
  // getLoadingPercentage(): number {
  //   return Math.round((this.loadedImagesCount / this.totalImages) * 100);
  // }
}