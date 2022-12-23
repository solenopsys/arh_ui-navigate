import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Navigate} from "@ngxs/router-plugin";
import {MenuItemData} from "../model";


@Component({
  selector: 'ui-smenu-item',
  templateUrl: './smenu-item.component.html',
  styleUrls: ['./smenu-item.component.css']
})
export class SMenuItemComponent implements OnInit {
  @Input()
  collapsed = false;

  @Input()
  data!: MenuItemData;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  nav(link: string) {
    console.log("START NAV", link)
    this.store.dispatch(new Navigate([link]))
  }
}
