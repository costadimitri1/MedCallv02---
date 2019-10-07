import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openRegistro(){
    const modal = await this.modalCtrl.create({
      component: RegistroPage
    });
    modal.present();
  }

  async openTab1(){
    const modal = await this.modalCtrl.create({
      component: Tab1Page
    });
    modal.present();
  }



}
