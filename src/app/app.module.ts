import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PropertyPageModule } from './property-page/property-page.module'
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { DropdownService } from './dropdown.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PropertyPageModule, MatSliderModule, MatCardModule, MatButtonModule, MatTabsModule, MatInputModule ],
  declarations: [ AppComponent, HelloComponent, DropdownComponent, DropdownListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DropdownService]
})
export class AppModule { }
