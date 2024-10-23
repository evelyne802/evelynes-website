import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  ngOnInit(){
    this.makeElementDraggable('self-container');
    this.makeElementDraggable('skills-container');
    this.makeElementDraggable('location-container');
    this.makeElementDraggable('languages-container');
    this.makeElementDraggable('courses-container');
    this.makeElementDraggable('experience-container');

    let video = document.getElementById('progress-bar');
    let backdrop = document.getElementById('backdrop');

    video?.addEventListener('ended', function() {
      setTimeout(function() {
        video!.className = "hidden";
        backdrop!.className = "hidden";
      }, 300)
    })
  }

  makeElementDraggable(elementId: string){
    let draggableElement = document.getElementById(elementId);
    let offsetX: any, offsetY: any;

    draggableElement?.addEventListener('mousedown', startDragging);
    draggableElement?.addEventListener('mouseup', stopDragging);

    function startDragging(e: any) {
        e.preventDefault();
        offsetX = e.clientX - draggableElement!.getBoundingClientRect().left;
        offsetY = e.clientY - draggableElement!.getBoundingClientRect().top;
        draggableElement!.classList.add('dragging');
        document.addEventListener('mousemove', dragElement);
    }

    function dragElement(e: any) {
        e.preventDefault();
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        draggableElement!.style.left = x + 'px';
        draggableElement!.style.top = y + 'px';
    }

    function stopDragging() {
        draggableElement?.classList.remove('dragging');
        document.removeEventListener('mousemove', dragElement);
    }
  }

  getToFront(id: string) {
    document.getElementById(id)!.style.zIndex += 1;
  }
    
}



