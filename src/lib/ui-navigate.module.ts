import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {MenuItemComponent} from "./menu-item/menu-item.component";
import {TopPaneComponent} from "./top-pane/top-pane.component";
import {TabsComponent} from "./tabs/tabs.component";
import {RouterModule} from "@angular/router";
import {DeclaredService, UtilsModule} from "@solenopsys/ui-utils";
import {UIControlsModule} from "@solenopsys/ui-controls";

const components = [
  MenuComponent,
  MenuItemComponent,
  TopPaneComponent,
  TabsComponent,

];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
      UIControlsModule,
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    TopPaneComponent,
  ]
})
export class UINavigateModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/ui-navigate", components)
  }
}
