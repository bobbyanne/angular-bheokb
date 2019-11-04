import { Component, OnInit, Input, forwardRef, HostListener, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DropdownService } from '../dropdown.service';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {

  @Input() options: any[];
  @Input() selectedValue: any;
  @Input() placeholder: string;
  @ViewChild(DropdownListComponent) dropdownList: DropdownListComponent;

  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    this.dropdownList.handleListKeyUp(event.key);
  }

  constructor() { }

  writeValue(value: any) {
    console.log(value);
    if (value !== undefined) {
      this.selectedValue = value;
      this.propagateChange(this.selectedValue);
    }
  }

  propagateChange = (_:any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}