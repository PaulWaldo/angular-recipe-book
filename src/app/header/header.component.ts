import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  @Output() componentSelectedEvent = new EventEmitter<string>();

  onComponentSelected(component: string) {
    this.componentSelectedEvent.emit(component);
  }
}
