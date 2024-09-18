import { Component } from '@angular/core';

@Component({
  selector: 'app-recognize',
  standalone: true,
  imports: [],
  templateUrl: './recognize.component.html',
  styleUrl: './recognize.component.scss'
})
export class RecognizeComponent {

  public arrOfNames: string[];
  constructor() {

    this.arrOfNames = ['Dorian Cree', 'Gus Levy', 'Jemmy Stevens', 'Brenda Owen'];
  }

  public addUser() {
    const userInput = prompt('maybe popup with input for add names?');

    if (userInput && this.arrOfNames.length < 5) {
      this.arrOfNames.push(userInput);
    } else {
      if(this.arrOfNames.length >= 5){
        alert('foo container');
      }
      alert('No name entered.');
    }
  }

  public removeItem(index: number): any {
    this.arrOfNames.splice(index, 1)

  }
}
