import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {MenuItemComponent} from "./menu-item/menu-item.component";
import {TopPaneComponent} from "./top-pane/top-pane.component";
import {TabsComponent} from "./tabs/tabs.component";
import {RouterModule} from "@angular/router";
import {SubMenuComponent} from "./sub-menu/sub-menu.component";
import {UIIconsModule} from "@solenopsys/uimatrix-icons";
import {DeclaredService, UtilsModule} from "@solenopsys/uimatrix-utils";

const components = [
  MenuComponent,
  MenuItemComponent,
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
    MenuComponent,
    MenuItemComponent,
    TopPaneComponent,
    SubMenuComponent
  ]
})
export class UINavigateModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/uimatrix-navigate", components)
  }
}
