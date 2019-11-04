import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {
  
  @Input() options: any[] = ['abc', 'def', 'hij'];
  @Input() isListOpen: boolean = false;

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  activeIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  handleListClick(event: MouseEvent) {
    console.log(event);
    this.isListOpen = 
      this.isListOpen
      ? false
      : true;
  }

  handleListKeyUp(key: string) {
    console.log(key);
    if (key === 'ArrowUp') {
      this.onArrowUp();
    } else if (key === 'ArrowDown') {
      this.onArrowDown();
    } else if (key === 'Enter') {
      this.onEnter();
    }
  }

  private onArrowUp() {
    this.activeIndex--;

    if (this.activeIndex < 0) {
      this.activeIndex = this.options.length - 1;
    }
  }

  private onArrowDown() {
    this.activeIndex++;

    if (this.activeIndex > this.options.length - 1) {
      this.activeIndex = 0;
    }
  }

  private onEnter() {
    if (this.isListOpen) {
      let selectedOption = this.options[this.activeIndex];
      this.onSelect.emit(selectedOption);
      this.isListOpen = false;
    } else {
      this.isListOpen = true;
    }
  }

  handleSelectableOptionClick() {
    let selectedOption = this.options[this.activeIndex];
    this.onSelect.emit(selectedOption);
    this.isListOpen = false;
  }

}