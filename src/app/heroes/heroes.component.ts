import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero = HEROES.length > 0 ? HEROES[0] : {id:0, name:"None"};

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
