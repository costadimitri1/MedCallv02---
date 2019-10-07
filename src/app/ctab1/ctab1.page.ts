import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ctab1',
  templateUrl: './ctab1.page.html',
  styleUrls: ['./ctab1.page.scss'],
})
export class Ctab1Page {

  constructor(
    private modalCtrl: ModalController
  ) { }

  fechar() {
    this.modalCtrl.dismiss();
  }

}
