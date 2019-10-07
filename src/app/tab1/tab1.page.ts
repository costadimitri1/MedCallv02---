import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ctab1Page } from '../ctab1/ctab1.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openCtab1() {
    const modal = await this.modalCtrl.create({
      component: Ctab1Page
    });
    modal.present();
  }

}
