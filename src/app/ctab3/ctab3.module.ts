import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ctab3Page } from './ctab3.page';

const routes: Routes = [
  {
    path: '',
    component: Ctab3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ctab3Page],
  exports: [Ctab3Page]
})
export class Ctab3PageModule {}
