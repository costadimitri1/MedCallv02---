import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ctab2Page } from '../ctab2/ctab2.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openCtab2() {
    const modal = await this.modalCtrl.create({
      component: Ctab2Page
    });
    modal.present();
  }
}