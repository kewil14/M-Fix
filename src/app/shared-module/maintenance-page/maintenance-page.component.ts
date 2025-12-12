import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styleUrls: ['./maintenance-page.component.css']
})
export class MaintenancePageComponent implements OnInit {
  // Countdown (mets ici la date de fin de maintenance)
  maintenanceEnd = new Date('2026-12-10T09:00:00').getTime();
  countdown: any;

  constructor() { }

  ngOnInit() {
    this.countdown = setInterval(() => {
     const now = new Date().getTime();
     const distance = this.maintenanceEnd - now;
  
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
     document.getElementById("days")!.innerText = days.toString().padStart(2, '0') ;
     document.getElementById("hours")!.innerText = hours.toString().padStart(2, '0');
     document.getElementById("minutes")!.innerText = minutes.toString().padStart(2, '0');
     document.getElementById("seconds")!.innerText = seconds.toString().padStart(2, '0');
  
     if (distance < 0) {
       clearInterval(this.countdown);
       window.location.reload();
     }
   }, 1000);
  
   // Petites particules animées en fond
   const particlesContainer = document.getElementById('particles');
   for(let i = 0; i < 30; i++) {
     const p = document.createElement('div');
     p.classList.add('particle');
     p.style.width = p.style.height = Math.random() * 8 + 4 + 'px';
     p.style.left = Math.random() * 100 + '%';
     p.style.animationDelay = Math.random() * 15 + 's';
     p.style.animationDuration = 10 + Math.random() * 20 + 's';
     particlesContainer?.appendChild(p);
   }
  }



}
