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
      strings: ['Ingeniero de Sistemas', 'Full Stack Developer', 'Instructor de Programación', 'Apasionado por la IA'],
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
    // Lenguajes y Frontend
    { name: 'HTML5', icon: 'fa-brands fa-html5', colorClass: 'html5' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', colorClass: 'css3' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', colorClass: 'javascript' },
    { name: 'TypeScript', icon: 'fa-brands fa-typescript', colorClass: 'typescript' },
    
    // Frameworks Frontend
    { name: 'Angular', icon: 'fa-brands fa-angular', colorClass: 'angular' },
    { name: 'React', icon: 'fa-brands fa-react', colorClass: 'react' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs', colorClass: 'vue' },
    
    // Backend
    { name: 'Node.js', icon: 'fa-brands fa-node-js', colorClass: 'node' },
    { name: 'Java', icon: 'fa-brands fa-java', colorClass: 'java' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf', colorClass: 'spring' },
    { name: 'PHP', icon: 'fa-brands fa-php', colorClass: 'php' },
    { name: 'Laravel', icon: 'fa-brands fa-laravel', colorClass: 'laravel' },
    { name: 'Python', icon: 'fa-brands fa-python', colorClass: 'python' },
    
    // Base de Datos y Herramientas
    { name: 'SQL', icon: 'fa-solid fa-database', colorClass: 'sql' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', colorClass: 'git' },
    { name: 'Docker', icon: 'fa-brands fa-docker', colorClass: 'docker' },
    { name: 'WordPress', icon: 'fa-brands fa-wordpress', colorClass: 'wordpress' },
  ];
}