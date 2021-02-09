import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
//import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes = HEROES;
  heroes: Hero[]= [];
  //selectedHero: Hero = HEROES.length > 0 ? HEROES[0] : {id:0, name:"None"};
  selectedHero: Hero = {id:0, name:"None"};

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    
    this.selectedHero = this.heroes[0];
  }

}
