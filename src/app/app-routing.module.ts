import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './cards/card-details/card-details.component';
import { CardsResultComponent } from './cards/cards-result/cards-result.component';
import { HeroComponent } from './hero/hero.component';
import { SetListComponent } from './set/set-list/set-list.component';
import { SetViewComponent } from './set/set-view/set-view.component';

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
  {
    path: 'sets',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SetListComponent,
      },
      {
        path: ':sets/:id',
        component: SetViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
