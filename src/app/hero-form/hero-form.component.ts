import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Tech', 'Fire', 'Water', 'Earth'];
  
  newHero = new Hero(18, 'Iron Man', this.powers[0], 'Extra ordinary');
  
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
