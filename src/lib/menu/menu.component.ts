import {Component, Input, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {MenuItemData} from "../model";

@Component({
  selector: "ui-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {

  @Input()
  data!: MenuItemData[];

  @Input()
  forModule = true;


  module!: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        this.module = event.url.split("/")[1];
        console.log("Navigation End", this.module);
        console.log("data", this.data);
      }
    });
  }

  ngOnInit(): void {
  }

}


