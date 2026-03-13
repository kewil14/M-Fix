import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  product!: Product;
  laptops: Product[] = [
    {
      id:"001L", 
      name:"ASUS Vivobook Go 14",
      description: "L410 Ultra Thin Laptop, 14 pouces FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB eMMC, NumberPad, ASUS Vivobook Go 14 L410 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB eMMC, NumberPad",
      image:  "assets/img/images/71RDNz9y4aL._AC_UY218_.jpg",
      price:  "150,000 XAF",
    },
    {
      id:"002L", 
      name:"Acer Swift Go Intel Evo",
      description: "Acer Swift Go Intel Evo Thin & Light Premium Laptop 14\" 1920x1200 100% sRGB Touch Screen Display Intel Core i7-1355U Intel Iris Xe 16GB LPDDR5 512GB Gen 4 SSD",
      image:  "assets/img/images/81Svdy-MGbL._AC_UY218_.jpg",
      price:  "120,000 XAF",
    },
    {
      id:"003L", 
      name:"Dell Inspiron 16 5635 Laptop",
      description: "AMD Ryzen 7-7730U, QHD 16 inch, 16GB LPDDR4x RAM, 1TB SSD, AMD Radeon Graphics, Windows 11 Home, 1 Year Premium Support ",
      image:  "assets/img/images/71OoFTrVZxL._AC_UY218_.jpg",
      price:  "165,000 XAF",
    },
    // {
    //   id:"004L", 
    //   name:"ASUS TUF Gaming A17 (2023)",
    //   description: "Gaming Laptop, 17.3” FHD 144Hz Display, GeForce RTX 4050, AMD Ryzen 9 7940HS, 16GB DDR5, 1TB PCIe 4.0 SSD, Wi-Fi 6, Windows 11",
    //   image:  "assets/img/images/519tAJTfFXL._AC_UY218_.jpg",
    //   price:  "450,000XAF",
    // },
    // {
    //   id:"005L", 
    //   name:"Acer Nitro 5 AN515-58-525P",
    //   description: "Gaming Laptop |Core i5-12500H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6\" FHD 144Hz IPS Display | 8GB DDR4 | 512GB PCIe Gen 4 SSD",
    //   image:  "assets/img/images/71Hiqi140OL._AC_UY218_.jpg",
    //   price:  "600,000 XAF",
    // },
    {
      id:"006L", 
      name:"Apple 2022 MacBook Pro",
      description: "Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 512GB ​​​​​​​SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera. Works with iPhone",
      image:  "assets/img/images/61bX2AoGj2L._AC_UY218_.jpg",
      price:  "250,000 XAF",
    },
    {
      id:"007L", 
      name:"DELL  i7,8Ram,256G ssd",
      description: `003...Dell latitude E5570
        Intel core i7 6ème gén
        Vitesse processeur :  2.70Ghz
        Ram :  8GB
        SSD :  256GB
        Mémoire graphique total : 12GB
        Ecran: 15.6 inch.`,
      image:  "assets/img/images/laptops/laptop1.jpeg",
      price:  "160,000 XAF",
    },
    {
      id:"008L", 
      name:"DELL , i5, 128G",
      description: `0017 Dell latitude E6420
        Processeur :  Intel core i5  Cpu  2.50Ghz
        Ram :  8GB
        Storage :  128G
        Size:  14'
        Generation: 7th 
        Operating system:(OS): Windows 11pro
        Wifi,bluetooth: present`,
      image:  "assets/img/images/laptops/laptop2.jpeg",
      price:  "NAN XAF",
    },
    {
      id:"009L", 
      name:"Dell 7480, 7th Gen, i5.256G ssd",
      description: `DELL LATITUDE 7480💻  ( i5)  7em génération couplé à 😳8GB Ram😳 extensible jusqu'à 20 Go 🤕.🔥
        Logiciels supportés :  (Logiciel d'architecture ) Toute la gamme Adobe Tous logiciels de dessin en ingénierie ( AutoCad, SoliWork, ..)
        ✅ Intel core i5 7Th Gen 2.70 Ghz.

        ✅ Ram 8GB PC4  extensible a 20GB

        ✅ SSD 256Go NVME 🔥

        ✅ Carte graphique Intel HD Graphics 620.

        ✅ Clavier rétro-éclairé / webcam / wifi 

        ✅Ecran 14.0" POUCES  FHD
        ✅Autonomie 💯 
        👉 Ports type-C  / empreinte digitale / USB/ HDMI/ SD/SIM`,
      image:  "assets/img/images/laptops/laptop3.jpeg",
      price:  "175,000 XAF",
    },
    {
      id:"010L", 
      name:"DELL 5490 i5( L683)",
      description: `Latitude 5490 i5 1.70GHz
        8th gen 
        256gb M2
        16gb ram 
        Écran 14 "
        CPU 8gb graphics`,
      image:  "assets/img/images/laptops/laptop4.jpeg",
      price:  "175,000 XAF",
    },
  ];

  smartphones: Product[] = [
    {
      id:"001S", 
      name:"Apple iPhone 11",
      description: "L410 Ultra Thin Laptop, 14 pouces FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB eMMC, NumberPad, ASUS Vivobook Go 14 L410 Ultra Thin Laptop, 14” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB eMMC, NumberPad",
      description1: "64GB, Black",
      image:  "assets/img/images/61MG3m5FhIL._AC_UY218_.jpg",
      price:  "150,000 XAF",
    },

  
  ];


  accesories: Product[] = [
    // {
    //   id:"001A", 
    //   name:"Mesh Office Chair",
    //   description: "iCoudy Ergonomic Mesh Office Chair Mid Back Swivel Desk",
    //   image:  "assets/img/images/61+zXvdZuJL._AC_UL320_.jpg",
    //   price:  "50 000 XAF",
    // },
    {
      id:"002A", 
      name:"Nikel strip",
      description: "2000F/m Nikel strip 0.15x25.5x18.5mm",
      image:  "assets/img/images/accesoires/Accesoire1.jpeg",
      price:  "",
    },
    {
      id:"003A", 
      name:"soudeuse",
      description: "soudeuse par points.",
      image:  "assets/img/images/accesoires/Accessoire2.jpeg",
      price:  "22,000 XAF ",
    },
    {
      id:"004A", 
      name:"Nikel strip",
      description: `True Capacity Tester li-ion battery.
        18650, 3.7v cells`,
      image:  "assets/img/images/accesoires/Accesoire3.jpeg",
      price:  "2500 XAF",
    },
    {
      id:"005A", 
      name:"Nikel strip",
      description: "Push button switch",
      image:  "assets/img/images/accesoires/Accesoire4.jpeg",
      price:  "200 XAF",
    },
  ];


  maintnances: Product[] = [
    {
      id:"001M", 
      name:"LCD Touch Display Complete Screen",
      description: "LCD Touch Display Complete Screen Replacement for Huawei nova Y60 6.6 inches Screen for Huawei Enjoy 20 5G WKG-LX9 Black",
      image:  "assets/img/images/71gbB4g6LXL._AC_UY218_.jpg",
      price:  "25,000XAF",
    },
  ];

  Batteries: Product[] = [
    {
      id:"001B", 
      name:"Li-ion 18650",
      description: "1000F - 2000F, 3.6v, 2 Ah (High Quality)",
      image:  "assets/img/images/batteries/battery1.jpeg",
      price:  "",
    },
    {
      id:"002B", 
      name:"Li-ion",
      description: "6000F 12V DRILL BATTERY",
      image:  "assets/img/images/batteries/battery2.jpeg",
      price:  "",
    },
    {
      id:"003B", 
      name:"Li-ion",
      description: "5000F Batterie perceuse 9-12v 3Ah",
      image:  "assets/img/images/batteries/battery3.jpeg",
      price:  "",
    },
    {
      id:"004B", 
      name:"Li-ion",
      description: "7500F 12v, 2500mAh, battery extern Box wifi, decoder",
      image:  "assets/img/images/batteries/battery4.jpeg",
      price:  "",
    },
    {
      id:"005B", 
      name:"Acid battery",
      description: "4000F    6v, 4.5Ah Acid battery",
      image:  "assets/img/images/batteries/battery5.jpeg",
      price:  "",
    },
    {
      id:"006B", 
      name:"Solar Battery",
      description: "Solar Battery, Gel 12v, 100Ah",
      image:  "assets/img/images/batteries/battery6.jpeg",
      price:  "",
    },
    
  ];
  
  
  
  
  ngOnInit(): void {
    
  }

}
