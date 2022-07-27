import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private cardService: ApiServicesService, private router: Router) {}

  cards: any;
  totalCards: number | undefined;

  async getPokemons() {
    return await this.cardService.getPokemons();
  }

  cardViewer(card: any) {
    this.router.navigate(['/card', card.id]);
  }

  ngOnInit() {
    this.getPokemons().then((data: any) => {
      this.cards = data.data;
      this.totalCards = data.totalCount;
    });

    ApiServicesService.sendedTerm.subscribe((term: any) => {
      this.cardService.getPokemonsByName(term).then((data: any) => {
        this.cards = data.data;
        this.totalCards = data.totalCount;
      });
    });
  }
}
