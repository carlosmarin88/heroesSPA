import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html',
  styles: [
  ]
})
export class BusquedaHeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  busqueda = '';

  constructor(private heroeService: HeroesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.busqueda = params.busqueda;
      this.heroes = this.heroeService.buscarHeroes( params.busqueda);
    });
  }

}
