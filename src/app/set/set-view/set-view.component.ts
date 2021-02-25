import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemontgcService } from 'src/app/services/pokemontgc.service';

@Component({
  selector: 'app-set-view',
  templateUrl: './set-view.component.html',
  styleUrls: ['./set-view.component.scss'],
})
export class SetViewComponent implements OnInit {
  set: any;
  setID: number = this.route.snapshot.params.id;

  constructor(
    private pkm: PokemontgcService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSet();
  }

  getSet() {
    this.pkm.getCardsBySet(this.setID).subscribe(
      (sets) => {
        this.set = sets['data'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log(this.set);
      }
    );
  }

  openCard(name, id) {
    var convertedName = name.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(['/card', convertedName, id]);
  }
}
