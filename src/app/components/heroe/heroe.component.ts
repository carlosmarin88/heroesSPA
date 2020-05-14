import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [ ' .casa-img { width: 100px; height: 100px;  }']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio:  '',
    casa: '',
    aparicion: '',
    img: '',
  };

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
        this.heroe = heroeService.getHeroe(params.id);
    });

  }

  ngOnInit(): void {
  }

}
