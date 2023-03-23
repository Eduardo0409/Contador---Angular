import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html' ,
})
export class App {
  timer: number;
  counter: number = 0;

  getMinute(){
    return Math.trunc(this.counter / 60);
  }

  getSecond(){
    return this.counter % 60;
  }

  start(){
    this.timer = setInterval(() => {
      this.counter++;
    }, 100);
  }
  pause(){
    clearInterval(this.timer);
  }
  stop(){
    clearInterval(this.timer);
    this.counter = 0;
  }
}

bootstrapApplication(App);
