import { Component, OnInit, Input } from '@angular/core';
import { store } from '@angular/core/src/render3';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() date: Date;
  @Input() title: string;
  @Input() content: string;
  @Input() appareilStatus: string;
  numbersLike = 0;
  numbersDislike = 0;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus; 
  }

  getColor() {
    if(this.numbersLike > this.numbersDislike) {
      return 'green';
    } else if(this.numbersDislike > this.numbersLike) {
      return 'red';
    }
  }

  onUserClickG() {
    this.numbersLike = this.numbersLike + 1;
    console.log("Nombre de likes : " + this.numbersLike);  
  }

  onUserClickR() {
    this.numbersDislike = this.numbersDislike + 1;
    console.log("Nombre de dislikes : " + this.numbersDislike);
  }

}
