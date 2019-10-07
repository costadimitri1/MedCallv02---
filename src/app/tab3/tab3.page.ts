import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ctab3Page } from '../ctab3/ctab3.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openCtab3() {
    const modal = await this.modalCtrl.create({
      component: Ctab3Page
    });
    modal.present();
  }
}
