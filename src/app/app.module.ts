import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {ShelterComponent} from "./components/shelter/shelter.component";
import {MatSelectModule} from "@angular/material/select";
import {ShelterService} from "./services/shelter.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { NewShelterDialogComponent } from './components/new-shelter-dialog/new-shelter-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ShelterComponent,
    NewShelterDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [ShelterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
