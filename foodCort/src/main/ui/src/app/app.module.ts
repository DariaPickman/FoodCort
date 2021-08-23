import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IncrementerComponent} from "./Components/incrementer/incrementer.component";
import { MealComponent } from './Components/meal/meal.component';
import { LoginComponent } from './Components/login/login.component';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddMealComponent } from './Components/add-meal/add-meal.component';
import {PictureDropAreaComponent} from "./Components/picture-drop-area/picture-drop-area.component";
import { AddMenuItemComponent } from './Components/add-menu-item/add-menu-item.component';
import { MenuItemComponent } from './Components/menu-item/menu-item.component';
import { CloseButtonComponent } from './Components/close-button/close-button.component';


@NgModule({
  declarations: [
    AppComponent,
    IncrementerComponent,
    MealComponent,
    LoginComponent,
    AddMealComponent,
    PictureDropAreaComponent,
    AddMenuItemComponent,
    MenuItemComponent,
    CloseButtonComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
