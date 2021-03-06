import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]= [];
  
  //selectedHero: Hero = {id:0, name:"None"};

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    
    //this.selectedHero = this.heroes[0];
  }

}
