import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ctab2',
  templateUrl: './ctab2.page.html',
  styleUrls: ['./ctab2.page.scss'],
})
export class Ctab2Page implements OnInit {


  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

    fechar() {
      this.modalCtrl.dismiss();
    }

  }