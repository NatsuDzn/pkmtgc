import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemontgcService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private api_url = 'https://api.pokemontcg.io/v2/';

  constructor(private http: HttpClient) {}

  public getCards(limit: number) {
    return this.http.get(
      this.api_url +
        'cards?pageSize=' +
        limit +
        '&page=' +
        Math.floor(Math.random() * 50) +
        1
    );
  }

  public getCardInfo(id) {
    return this.http.get(this.api_url + 'cards/' + id);
  }

  public searchCards(name: string, limit: number, page: number = 1) {
    return this.http.get(
      this.api_url +
        'cards?q=name:' +
        name +
        '&page=' +
        page +
        '&pageSize=' +
        limit
    );
  }
}
