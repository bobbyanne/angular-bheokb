import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {
  isOpen: boolean = false;

  openDropdown() {
    this.isOpen = true;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  toggleOpen() {
    this.isOpen 
      ? this.closeDropdown()
      : this.openDropdown();
  }

  constructor() { }

}