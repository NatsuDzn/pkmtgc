import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemontgcService } from 'src/app/services/pokemontgc.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SearchCards } from 'src/app/services/interface';

@Component({
  selector: 'app-cards-result',
  templateUrl: './cards-result.component.html',
  styleUrls: ['./cards-result.component.scss'],
})
export class CardsResultComponent implements OnInit {
  ELEMENT_DATA: SearchCards[];
  displayedColumns: string[] = [
    'set',
    'no',
    'name',
    'rarity',
    'types',
    'supertype',
    'subtypes',
    'prices',
  ];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  searchCards: any;
  queryName: string = this.route.snapshot.queryParams.name;
  queryArtist: string = this.route.snapshot.queryParams.artist;
  queryRarity: string = this.route.snapshot.queryParams.rarity;

  viewAs: string = 'images';
  querySort: string =
    this.route.snapshot.queryParams.sortedBy || 'set.releaseDate';
  queryOrder: string = this.route.snapshot.queryParams.order || '';

  tooltipIndex: number;
  mouseX: any;
  mouseY: any;

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
    this.dataSource = new MatTableDataSource<SearchCards>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.searchCard();
  }

  searchCard() {
    if (this.queryName) {
      this.pkm
        .searchCards(
          'name',
          this.queryName,
          this.size,
          this.page + 1,
          this.querySort,
          this.queryOrder
        )
        .subscribe(
          (res) => {
            this.searchCards = res;
            this.dataSource.data = res['data'] as SearchCards[];
            this.router.navigate(['/search'], {
              queryParams: {
                name: this.queryName,
                sortedBy: this.querySort,
                order: this.queryOrder,
              },
            });
          },
          (error) => {
            console.log(error);
          },
          () => {}
        );
    } else if (this.queryArtist) {
      this.pkm
        .searchCards(
          'artist',
          this.queryArtist,
          this.size,
          this.page + 1,
          this.querySort,
          this.queryOrder
        )
        .subscribe(
          (res) => {
            this.searchCards = res;
            console.log(res);
          },
          (error) => {
            console.log(error);
          },
          () => {}
        );
    } else if (this.queryRarity) {
      this.pkm
        .searchCards(
          'rarity',
          this.queryRarity,
          this.size,
          this.page + 1,
          this.querySort,
          this.queryOrder
        )
        .subscribe(
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

  updateSort(sort, direction) {
    if (this.queryName) {
      this.router.navigate(['/search'], {
        queryParams: { name: this.queryName, sortedBy: sort, order: direction },
      });

      this.pkm
        .searchCards(
          'name',
          this.queryName,
          this.size,
          this.page + 1,
          sort,
          direction
        )
        .subscribe(
          (res) => {
            this.searchCards = res;
            this.dataSource.data = res['data'] as SearchCards[];
          },
          (error) => {
            console.log(error);
          },
          () => {}
        );
    } else if (this.queryArtist) {
      this.router.navigate(['/search'], {
        queryParams: {
          artist: this.queryArtist,
          sortedBy: sort,
          order: direction,
        },
      });

      this.pkm
        .searchCards(
          'artist',
          this.queryArtist,
          this.size,
          this.page + 1,
          sort,
          direction
        )
        .subscribe(
          (res) => {
            this.searchCards = res;
            console.log(res);
          },
          (error) => {
            console.log(error);
          },
          () => {}
        );
    } else if (this.queryRarity) {
      this.router.navigate(['/search'], {
        queryParams: {
          rarity: this.queryRarity,
          sortedBy: sort,
          order: direction,
        },
      });

      this.pkm
        .searchCards(
          'rarity',
          this.queryRarity,
          this.size,
          this.page + 1,
          sort,
          direction
        )
        .subscribe(
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
  }

  cardTooltip(index, event) {
    this.tooltipIndex = index;
    this.mouseX = event.clientX + 16 + 'px';
    this.mouseY = event.clientY + 16 + 'px';
  }
}
