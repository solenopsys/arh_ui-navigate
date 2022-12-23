import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SMenuComponent} from "./smenu/smenu.component";
import {SMenuItemComponent} from "./smenu-item/smenu-item.component";
import {TopPaneComponent} from "./top-pane/top-pane.component";
import {TabsComponent} from "./tabs/tabs.component";
import {RouterModule} from "@angular/router";
import {SubMenuComponent} from "./sub-menu/sub-menu.component";
import {UIIconsModule} from "@solenopsys/uimatrix-icons";
import {DeclaredService, UtilsModule} from "@solenopsys/uimatrix-utils";

const components = [
  SMenuComponent,
  SMenuItemComponent,
  TopPaneComponent,
  TabsComponent,
  SubMenuComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
    UIIconsModule,
  ],
  exports: [
    SMenuComponent,
    SMenuItemComponent,
    TopPaneComponent,
    SubMenuComponent
  ]
})
export class UILayoutsModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/uimatrix-layouts", components)
  }
}
