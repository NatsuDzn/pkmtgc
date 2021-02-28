import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemontgcService } from 'src/app/services/pokemontgc.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  pkmCards: any;
  searchText: string;

  constructor(private pkm: PokemontgcService, private router: Router) {}

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.pkm.getCards(5).subscribe(
      (cards) => {
        this.pkmCards = cards['data'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log(this.pkmCards);
      }
    );
  }

  searchCard(name) {
    this.router.navigate(['/search'], {
      queryParams: { name: name, sortedBy: 'set.releaseDate', order: '' },
    });
  }

  openCard(name, id) {
    var convertedName = name.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(['/card', convertedName, id]);
  }
}
