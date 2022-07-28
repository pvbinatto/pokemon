import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.searchTerm = term;
    this.sendSearchTerm.emit(this.searchTerm);
    ApiServicesService.sendedTerm.emit(this.searchTerm);
  }

  getTerm() {
    return this.searchTerm;
  }

  getPokemons(): Observable<any> {
    const result = this.http
      .get<any>(
        `${environment.apiUrl}/cards/?orderBY=name&pageSize=24`,
        this.getHeaders()
      );
    return result;
  }

  getPokemonsById(cardId: any): Observable<any> {
    const result = this.http
      .get<any>(`${environment.apiUrl}/cards/${cardId}`, this.getHeaders());
    return result;
  }

  getPokemonsByName(name: string): Observable<any> {
    const result = this.http
      .get<any>(`${environment.apiUrl}/cards?q=name:${name}`, this.getHeaders());
    return result;
  }
}
