import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabGroupComponent } from './tab-group.component';
import { TabPanelComponent } from './tab-panel.component';
import { tabBsGroupComponent } from './tab-bs-group.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, HelloComponent,tabBsGroupComponent,TabPanelComponent,TabGroupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
