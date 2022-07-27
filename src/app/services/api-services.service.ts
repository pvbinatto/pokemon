import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  constructor(private http: HttpClient) {}

  getHeaders(): { headers: HttpHeaders } {
    let token = environment.apiKey;
    let header = new HttpHeaders({ 'x-api-key': '' + token });
    const requestOptions = { headers: header };
    return requestOptions;
  }

  private searchTerm = {};
  sendSearchTerm = new EventEmitter();
  static sendedTerm = new EventEmitter();

  setTerm(term: string) {
    console.log(term);
    this.searchTerm = term;
    this.sendSearchTerm.emit(this.searchTerm);
    ApiServicesService.sendedTerm.emit(this.searchTerm);
  }

  getTerm() {
    return this.searchTerm;
  }

  async getPokemons() {
    const result = await this.http
      .get<any>(
        `${environment.apiUrl}/cards/?orderBY=name&pageSize=24`,
        this.getHeaders()
      )
      .toPromise();
    return result;
  }

  async getPokemonsById(cardId: any) {
    const result = await this.http
      .get<any>(`${environment.apiUrl}/cards/${cardId}`, this.getHeaders())
      .toPromise();
    return result;
  }

  async getPokemonsByName(name: string) {
    const result = await this.http
      .get<any>(`${environment.apiUrl}/cards?q=name:${name}`, this.getHeaders())
      .toPromise();
    return result;
  }
}
