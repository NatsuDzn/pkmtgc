import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  searchCard(name) {
    this.router.navigate(['/search'], {
      queryParams: { name: name },
    });
  }
}
