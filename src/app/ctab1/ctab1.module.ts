import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ctab1Page } from './ctab1.page';

const routes: Routes = [
  {
    path: '',
    component: Ctab1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ctab1Page],
  exports: [Ctab1Page]
})
export class Ctab1PageModule {}
