import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemontgcService } from '../services/pokemontgc.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  cardId = this.route.snapshot.params.id;
  cardData: any;

  constructor(
    private pkm: PokemontgcService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cardInfo();
  }

  cardInfo() {
    this.pkm.getCardInfo(this.cardId).subscribe(
      (res) => {
        this.cardData = res["data"];
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log(this.cardData);
        
      }
    );
  }
}
