import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeores();
    console.log(this.heroes);
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
    // this.router.navigateByUrl(`/heroe/${idx}`);
  }

}
