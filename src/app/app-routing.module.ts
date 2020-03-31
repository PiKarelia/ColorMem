import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameMenuComponent } from './pages/game-menu/game-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu'
  },
  {
    path: 'menu',
    component: GameMenuComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
