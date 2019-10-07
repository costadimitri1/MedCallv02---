import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ctab2Page } from './ctab2.page';

const routes: Routes = [
  {
    path: '',
    component: Ctab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ctab2Page],
  exports: [Ctab2Page]
})
export class Ctab2PageModule {}
