import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ApiServicesService],
})
export class HeaderComponent implements OnInit {
  constructor(private cardService: ApiServicesService) {}

  pokemon = {
    name: '',
  };

  searchTerm: string = 'Faça sua pesquisa aqui';

  cards: any;
  totalCards: number | undefined;

  getPokemonsByName(name: string) {
    return this.cardService.getPokemonsByName(name);
  }

  title = 'Cartas Pokémon';
  subtitle = 'Projeto de desenvolvimento de aplicação web utilizando Angular';

  ngOnInit(): void {}

  setTerm(term: string) {
    this.cardService.setTerm(term);
  }

  onSubmit() {
    this.setTerm(this.searchTerm);
  }
}
