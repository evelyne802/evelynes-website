import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MainComponent } from '../main/main.component';
import Typed from 'typed.js';

@Component({
  selector: 'app-opening',
  standalone: true,
  imports: [],
  templateUrl: './opening.component.html',
  styleUrl: './opening.component.css'
})
export class OpeningComponent {
  constructor(private location: Location, private router: Router) {}
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
      cursorChar: '',
      onComplete: () => { 
        setTimeout( () =>{
          this.router.navigate(['/profile'], { skipLocationChange: true });
        }, 1000);
       },
    });
  }
}


