import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ctab3',
  templateUrl: './ctab3.page.html',
  styleUrls: ['./ctab3.page.scss'],
})
export class Ctab3Page implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

    fechar() {
      this.modalCtrl.dismiss();
    }

  }