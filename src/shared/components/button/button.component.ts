import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {


  @Input() title: string = ''
  @Input() class: string = ''
  @Output() callAction = new EventEmitter()

  emitEventForParentComponent() {
    this.callAction.emit()
  }
}
