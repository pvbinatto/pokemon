import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.scss'],
})
export class CardViewerComponent implements OnInit {
  constructor(
    private cardService: ApiServicesService,
    private route: ActivatedRoute
  ) {}

  pokemon: any;
  id = this.route.snapshot.paramMap.get('id');
  getPokemonsById(cardId: any) {
    return this.cardService.getPokemonsById(cardId);
  }

  getPokemonsByName(name: string) {
    return this.cardService.getPokemonsByName(name);
  }

  ngOnInit(): void {
    this.getPokemonsById(this.id).subscribe((data: any) => {
      this.pokemon = data.data;
      console.log(this.pokemon);
    });
  }
}
