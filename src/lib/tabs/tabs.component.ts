import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'ui-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    @Input()
    select!: string|undefined;

    @Input()
    tabs$!: Observable<{ id:string, title:string }[]>;

    @Output()
    tabClick = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

}
