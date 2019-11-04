import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyService } from './property.service';
import { OverviewComponent } from './components/overview/overview.component';
import { PropertyTabMenuComponent } from './components/property-tab-menu/property-tab-menu.component';
import { MediaComponent } from './components/media/media.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OverviewComponent, PropertyTabMenuComponent, MediaComponent],
  providers: [PropertyService]
})
export class PropertyPageModule { }