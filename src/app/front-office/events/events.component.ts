import { AfterViewInit, Component, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements AfterViewInit{
  @ViewChild('swiperContainer') swiperContainer: any; // Remplacez 'any' par le type approprié si possible
  swiper!: Swiper;


  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      // Options de configuration du carrousel swiper
      // Par exemple : direction: 'horizontal', loop: true, ...
    });
    console.log(this.swiperContainer.nativeElement);
  }
}
