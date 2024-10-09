import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-opening',
  standalone: true,
  imports: [],
  templateUrl: './opening.component.html',
  styleUrl: './opening.component.css'
})
export class OpeningComponent {
  ngOnInit(){
    const firstTyped = new Typed('#first-line', {
      strings: ['>&nbsp;load profile -firstName "Evelyne" -lastName "Gluzman"<br>>&nbsp;'],
      typeSpeed: 80,
      backDelay: 1000,
      backSpeed:0,
      loop: false,
      cursorChar: ''
    });

    const secondTyped = new Typed('#second-line', {
      strings: ['Loading...'],
      typeSpeed: 10,
      backDelay: 1000,
      startDelay: 8000,
      loop: false,
      cursorChar: ''
    });
  }
}


