import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //necessary to initialize the object
  @Input() hero: Hero = {id:0, name: "None"};

  constructor() { }

  ngOnInit(): void {
  }

}
