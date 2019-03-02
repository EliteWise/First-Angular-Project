import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';
import { AppareilComponent } from './appareil/appareil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuth = false;
  d = new Date();

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);     
        }, 2000
      );
    }
  )

  loveIt = 0;
  DontLoveIt = 0;
  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis";

  post = [
    {
      title: 'Mon premier post',
      content: this.content,
      loveIts: this.loveIt,
      created_at: this.d
    },
    {
      title: 'Mon deuxième post',
      content: this.content,
      loveIts: this.loveIt,
      created_at: this.d
    },
    {
      title: 'Encore un post',
      content: this.content,
      loveIts: this.loveIt,
      created_at: this.d
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  }
}
