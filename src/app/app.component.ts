import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'retour des héros';
  heroes = [
    'Superman',
    'Wonderwoman',
    'Prettywoman',
  ];
  name = '';
  heroToAdd='';
  addHero(){
    // si heroToAdd = ' coucou '
    // alors heroToAdd.trim() = 'coucou'
    // donc si heroToAdd = '         '
    // alors heroToAdd = ''
      if(this.heroToAdd !== ''){ // ou if(this.heroToAdd.trim().length > 0)
    this.heroes.push(this.heroToAdd.trim());
    // this represente le heroes qui se trouve dans la classe courrante qui est AppComponent
    this.heroToAdd = '';
  }else{
    alert('le nom du héros ne doit pas etre vide');
  }
  
} 
}// fin de classAppComponent
