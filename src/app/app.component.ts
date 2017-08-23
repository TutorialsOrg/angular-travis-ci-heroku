import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Continous deployment with Travis CI and Heroku';
  TechStack: Technology[] = [{
    id: 1,
    name: 'Angular',
    category: 'Web'
  }, {
    id: 2,
    name: 'NodeJS',
    category: 'Web'
  }, {
    id: 3,
    name: 'GITHUB',
    category: 'CVS'
  }, {
    id: 4,
    name: 'Travis-CI',
    category: 'Continous Integration'
  }, {
    id: 5,
    name: 'Heroku',
    category: 'Cloud Provider'
  }];
}
export class Technology {
  id: number;
  name: string;
  category: string;
}
