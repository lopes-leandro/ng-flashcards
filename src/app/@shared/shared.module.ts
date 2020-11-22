import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { sharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    sharedRoutingModule
  ],
  exports:[]
})
export class sharedModule { }
