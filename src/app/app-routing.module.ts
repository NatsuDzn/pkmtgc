import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardsResultComponent } from './cards-result/cards-result.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'search',
    component: CardsResultComponent,
  },
  {
    path: 'card',
    component: CardDetailsComponent,
  },
  {
    path: 'card',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CardDetailsComponent,
      },
      {
        path: ':name/:id',
        component: CardDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
