import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Heroe[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  constructor(private _heroesService:HeroesService, private router: Router){

  }

  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }

}
