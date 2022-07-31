import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person-toolbar',
  templateUrl: './person-toolbar.component.html',
  styleUrls: ['./person-toolbar.component.css'],
})
export class PersonToolbarComponent implements OnInit {
  @Input() entityName: string = '';
  @Output() termEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * onInput
   */
  public onInput(term: string) {
    this.termEmitter.emit(term);
  }
}
