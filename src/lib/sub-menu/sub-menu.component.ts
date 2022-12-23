import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  @Input()
  items!: { key: string, title: string }[];

  @Input()
  prefix!:string;

  constructor() {
  }

  ngOnInit(): void {
  }

}






