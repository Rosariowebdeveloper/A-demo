import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  condition: boolean = true;

  hoverd: boolean = false;
  onMouseOver() {
    this.hoverd = true;
  };

  onMouseLeave() {
    this.hoverd = false;
  };

  hoverd1: boolean = false;

  over() {
    this.hoverd1 = true;
    

  };
  out() {
    this.hoverd1 = false;



  };














  
}
