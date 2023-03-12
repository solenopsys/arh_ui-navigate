import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {TopPaneConfig} from "../types";


@Component({
    selector: 'ui-top-pane',
    templateUrl: './top-pane.component.html',
    styleUrls: ['./top-pane.component.scss']
})
export class TopPaneComponent {

    @Input()
    config!: TopPaneConfig;
    @Output()
    events = new EventEmitter<any>();

    constructor(@Inject('logo') public logo: string) {
    }


// <ui-icon-button [icon]="'/assets/icons/01-Interface-Essential/12-Settings/cog.svg'"
//         [title]="'Settings'" [routerLink]="'/settings'"></ui-icon-button>
//
//     <ui-icon-button (click)="menuClick.emit($event)"
//         [icon]="'/assets/icons/01-Interface-Essential/03-Menu/navigation-menu-1.svg'"
//         [title]="'Menu'"></ui-icon-button>
//     <ui-icon-button (click)="menuClick.emit($event)"
//         [icon]="'/assets/icons/01-Interface-Essential/03-Menu/navigation-menu-1.svg'"
//         [title]="'login'"  [routerLink]="'/login'"></ui-icon-button>


}






