import { Component } from '@angular/core';

interface Model {
  favoriteFood: string
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  model: Model;
  foodOptions: any[] = ["Mac N' Cheese", 'Buscuits and Gravy', 'Pizza', 'Rum Ham', 'Snickers'];

  constructor() {
    this.model = {
      favoriteFood: ''
    };
  }
  
  log() {
    console.log(this.model)
  }
}
