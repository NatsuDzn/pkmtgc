import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemontgcService } from 'src/app/services/pokemontgc.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss'],
})
export class SetListComponent implements OnInit {
  setLists: any;

  constructor(private pkm: PokemontgcService, private router: Router) {}

  ngOnInit() {
    this.getSets();
  }

  getSets() {
    this.pkm.getAllSets().subscribe(
      (sets) => {
        this.setLists = sets['data'];
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  openSet(name, id) {
    var convertedName = name.replace(/\s+/g, '-').toLowerCase();
    var finalName = convertedName.replace('&', 'and');
    this.router.navigate(['/sets', finalName, id]);
  }
}
