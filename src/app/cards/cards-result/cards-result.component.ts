import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemontgcService } from 'src/app/services/pokemontgc.service';


@Component({
  selector: 'app-cards-result',
  templateUrl: './cards-result.component.html',
  styleUrls: ['./cards-result.component.scss'],
})
export class CardsResultComponent implements OnInit {
  searchCards: any;
  queryName: string = this.route.snapshot.queryParams.name;

  pageEvent: PageEvent;
  page: number = 0;
  size: number = 10;
  recordCount: number;
  pageSizeOptions: number[] = [10, 25, 50];

  constructor(
    private pkm: PokemontgcService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.searchCard();
  }

  searchCard() {
    this.pkm.searchCards(this.queryName, this.size, this.page + 1).subscribe(
      (res) => {
        this.searchCards = res;
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  pageNavigations(event?: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.searchCard();
  }

  openCard(name, id) {
    var convertedName = name.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(['/card', convertedName, id]);
  }
}
