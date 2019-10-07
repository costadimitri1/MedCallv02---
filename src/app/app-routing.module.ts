import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren:  () => import('./login/login.module').then (m => m.LoginPageModule) },
  { path: 'registro', loadChildren: () => import ('./registro/registro.module').then (m => m.RegistroPageModule,) },
  { path: 'tabs', loadChildren: () => import ('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'tab1', loadChildren: () => import ('./tab1/tab1.module').then(m => m.Tab1PageModule) },
  { path: 'tab2', loadChildren: () => import ('./tab2/tab2.module').then(m => m.Tab2PageModule) },
  { path: 'tab3', loadChildren: () => import ('./tab3/tab3.module').then(m => m.Tab3PageModule) },
  { path: 'ctab1', loadChildren: () => import ('./ctab1/ctab1.module').then(m => m.Ctab1PageModule) },
  { path: 'ctab2', loadChildren: () => import ('./ctab2/ctab2.module').then(m => m.Ctab2PageModule) },
  { path: 'ctab3', loadChildren: () => import ('./ctab3/ctab3.module').then(m => m.Ctab3PageModule) }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//{ path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
//{ path: '', redirectTo: 'tab1', pathMatch: 'full' },
//{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
//{ path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
//{ path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
//{ path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
//{ path: 'ctab1', loadChildren: './ctab1/ctab1.module#Ctab1PageModule' },
//{ path: 'ctab2', loadChildren: './ctab2/ctab2.module#Ctab2PageModule' },
//{ path: 'ctab3', loadChildren: './ctab3/ctab3.module#Ctab3PageModule' },
//{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
//{ path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' }
//];
