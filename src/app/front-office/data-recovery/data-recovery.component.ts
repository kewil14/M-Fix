import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-data-recovery',
  templateUrl: './data-recovery.component.html',
  styleUrls: ['./data-recovery.component.scss']
})
export class DataRecoveryComponent implements OnInit {

  readonly whatsappUrl =
    'https://wa.me/237657763228?text=Bonjour%2C%20j%27ai%20besoin%20d%27une%20r%C3%A9cup%C3%A9ration%20de%20donn%C3%A9es.%20Pouvez-vous%20m%27aider%20%3F';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Récupération de Données Yaoundé | Mr Fix Electronics');
    this.metaService.updateTag({
      name: 'description',
      content: 'Expert en récupération de données à Yaoundé, Cameroun. Récupération de disques durs HDD, SSD, clés USB et cartes mémoire. Service rapide, fiable et confidentiel. Appelez le 657 76 32 28.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'récupération données Yaoundé, data recovery Cameroun, récupération disque dur Yaoundé, récupération SSD, récupération clé USB, données perdues Cameroun, Mr Fix Electronics, Awae Escalier'
    });
  }
}
