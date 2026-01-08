import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

import { Directive, HostListener, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-cabecera-dash',
  templateUrl: './cabecera-dash.component.html',
  styleUrls: ['./cabecera-dash.component.css']
})
export class CabeceraDashComponent implements OnInit {

  ngOnInit(): void {
    this.initTyped();
  }

  private initTyped(): void {
    const options = {
      strings: ['Engineer', 'Programmer', 'Freelancer', 'Coach'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    new Typed('.typed-element', options);
  }
  
    @Output() scrollToTop = new EventEmitter<void>();
  
    @HostListener('click') onClick() {
      this.scrollToTop.emit();
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  
    constructor(private el: ElementRef, private renderer: Renderer2) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }

    skills = [
      { name: 'PHP', icon: 'fa-brands fa-php', colorClass: 'php' },
      { name: 'Laravel', icon: 'fa-brands fa-laravel', colorClass: 'laravel' },
      { name: 'Angular', icon: 'fa-brands fa-angular', colorClass: 'angular' },
      { name: 'React', icon: 'fa-brands fa-react', colorClass: 'react' },
      { name: 'Node.js', icon: 'fa-brands fa-node-js', colorClass: 'node' },
      { name: 'Java', icon: 'fa-brands fa-java', colorClass: 'java' },
      { name: 'Spring Boot', icon: 'fa-solid fa-leaf', colorClass: 'spring' }, // usando icono hoja
      { name: 'Python', icon: 'fa-brands fa-python', colorClass: 'python' },
    ];
    
  }

  
