import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  containerList = [
    'self-container',
    'skills-container',
    'location-container',
    'languages-container',
    'courses-container',
    'experience-container',
    'fingerprint-container',
    'audio-container',
    'projects-container'
  ]

  ngOnInit(){

    this.containerList.forEach(this.makeElementDraggable);

    let progeressBar = document.getElementById('progress-bar');
    let backdrop = document.getElementById('backdrop');

    progeressBar?.addEventListener('animationend', function() {
      setTimeout(function() {
        progeressBar!.className = "hidden";
      }, 30)
      setTimeout(function() {
        backdrop!.className = "hidden";
        backdrop!.style.display = "none";
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



