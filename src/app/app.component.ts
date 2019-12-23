import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-recipe-book';
  selectedComponent = 'recipe';

  onNavigate(component: string) {
    this.selectedComponent = component;
  }
}
