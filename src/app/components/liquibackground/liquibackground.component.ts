import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-liquibackground',
  standalone: true,
  imports: [],
  templateUrl: './liquibackground.component.html',
  styleUrls: ['./liquibackground.component.css']
})
export class LiquibackgroundComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    this.initBlobs();
  }

  private readonly MIN_SPEED = 1.5;
  private readonly MAX_SPEED = 2.5;

  private randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private initBlobs(): void {
    const blobEls = document.querySelectorAll('.bouncing-blob');
    const blobs = Array.from(blobEls).map(blobEl => new Blob(blobEl as HTMLElement, this.MIN_SPEED, this.MAX_SPEED, this.randomNumber));

    const update = () => {
      requestAnimationFrame(update);
      blobs.forEach(blob => {
        blob.update();
        blob.move();
      });
    };

    requestAnimationFrame(update);
  }
}

class Blob {
  private el: HTMLElement;
  private size: number;
  private initialX: number;
  private initialY: number;
  private vx: number;
  private vy: number;
  private x: number;
  private y: number;

  constructor(el: HTMLElement, private MIN_SPEED: number, private MAX_SPEED: number, private randomNumber: (min: number, max: number) => number) {
    this.el = el;
    const boundingRect = this.el.getBoundingClientRect();
    this.size = boundingRect.width;
    this.initialX = this.randomNumber(0, window.innerWidth - this.size);
    this.initialY = this.randomNumber(0, window.innerHeight - this.size);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.left = `${this.initialX}px`;
    this.vx = this.randomNumber(this.MIN_SPEED, this.MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.vy = this.randomNumber(this.MIN_SPEED, this.MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.x = this.initialX;
    this.y = this.initialY;
  }

  update(): void {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size;
      this.vx *= -1;
    }
    if (this.y >= window.innerHeight - this.size) {
      this.y = window.innerHeight - this.size;
      this.vy *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
  }

  move(): void {
    this.el.style.transform = `translate(${this.x - this.initialX}px, ${this.y - this.initialY}px)`;
  }
}
