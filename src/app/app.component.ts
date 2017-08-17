import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';
  hero: Hero = { id: 1, name: 'surya' };
}
export class Hero {
  id: number;
  name: string;
}
