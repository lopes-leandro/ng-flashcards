import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule} from "./@shared/shared.module";
import { CustomMaterialModule } from "./@custom-material/custom-material.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CustomMaterialModule.forRoot(),
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
