import { Component } from "@angular/core";


@Component({
  selector:'tab-group',
  template:`
  <div class="tab-header-item"
  *ngFor = "let tab of tabPanelList; index = idx"
  (click)="activeIndexChange.emit(idx)">
  {{tab.title}}
  <button (click)="removeTab(tab)">x</button>
  </div>
  <div>
  
  </div>
  `,
  
})
export class TabGroupComponent {}