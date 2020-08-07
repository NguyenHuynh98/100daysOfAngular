import { Component, forwardRef } from "@angular/core";
import {tabGroupComponent} from './tab-group.component';

const tabBsGroupProviders=[
  {
    providers: tabGroupComponent,
    useExisting: forwardRef(()  => tabBsGroupComponent)
  }
]

@Component({
  selector:`tab-bs-group`,
  template:`
  <ul class="nav nav-tabs">
  <li class="nav-item" *ngFor = "let tab of TabPanelList; let idx = index">
    <a class="nav-link 
    [class.active]="idx ===activeIndex"
    (click)="activeIndexChange.emit(idx)">
    {{tab.title}}
    <button class = "btn btn-sm bt-danger" (click)="removeTab(tab)">
    x
    </button>
   </a>
  </li>
  </ul>
  <div class ="tab-body" *ngIf = "tabPanelList.length; else NoTabs">
  <ng-container
  *ngTemplateOutlet = "TabPanelList[activeIndex].panelBody">
  </ng-container>
  </div>
  <ng-template #NoTabs>
  No more tabs
  </ng-template>

  `,
providers: tabBsGroupProviders
})
export class tabBsGroupComponent extends tabGroupComponent{}