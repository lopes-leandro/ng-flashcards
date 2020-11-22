import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from "./../@custom-material/custom-material.module";
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CustomMaterialModule,
    RouterModule,
    CommonModule
  ],
  exports:[]
})
export class SharedModule { }
