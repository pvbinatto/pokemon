import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private cardService: ApiServicesService,
    private router: Router
  ) {}
  title: string = 'Pokemons';
  cards: any;
  totalCards: number | undefined;
  isLoading = false;

  getPokemons() {
    return this.cardService.getPokemons();
  }

  cardViewer(card: any) {
    this.router.navigate(['/card', card.id]);
  }

  ngOnInit() {

    this.isLoading = true;

    this.getPokemons().subscribe((data: any) => {
      this.cards = data.data;
      this.totalCards = data.totalCount;
      this.isLoading = false;
    });

    ApiServicesService.sendedTerm.subscribe((term: any) => {
      if (term) {
        this.cardService.getPokemonsByName(term).subscribe(
          (data: any) => {
            this.isLoading = false;
            this.cards = data.data;
            this.totalCards = data.totalCount;
          },
          (error: any) => {
            console.error(error);
          }
        );
      } else {
        this.getPokemons().subscribe(
          (data: any) => {
            this.isLoading = false;
            this.cards = data.data;
            this.totalCards = data.totalCount;
          },
          (error: any) => {
            console.error(error);
          }
        );
      }
    });
  }
}
