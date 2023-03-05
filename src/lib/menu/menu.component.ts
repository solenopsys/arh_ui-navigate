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


    current!: string;

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        this.current = event.url;
        console.log("Navigation End", this.current);
        console.log("data", this.data);
      }
    });
  }

    ngOnInit(): void {
    }

}


