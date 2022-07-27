import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cardService: ApiServicesService) {}

  pokemon = {
    name: '',
  };

  cards: any;
  totalCards: number | undefined;

  async getPokemonsByName(name: string) {
    return await this.cardService.getPokemonsByName(name);
  }

  title = 'Cartas Pokémon';
  subtitle = 'Projeto de desenvolvimento de aplicação web utilizando Angular';

  ngOnInit(): void {}

  setTerm(term: string) {
    this.cardService.setTerm(term);
  }

  onSubmit() {

    if (this.pokemon.name) {
      console.log(this.pokemon.name);
      this.setTerm(this.pokemon.name);
      // this.getPokemonsByName(this.pokemon.name).then((data: any) => {
      //   this.cards = data.data;
      //   this.totalCards = data.totalCount;
      //   console.log(this.cards);
      // });
    }
  }
}
